import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLayout from "./layouts/CommonLayout";
import Algorithm from "./pages/Algorithm";
import Algorithms from "./pages/Algorithms";
import Bio from "./pages/Bio";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Write from "./pages/Write";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          <Route path="/" element={<Main />}></Route>
          <Route path="/bio" element={<Bio foo={1} />}></Route>
          <Route path="/posts" element={<Posts foo={1} />}></Route>
          <Route path="/posts/:id" element={<Post foo={1} />}></Route>
          <Route path="/algorithms" element={<Algorithms foo={1} />}></Route>
          <Route path="/algorithms/:id" element={<Algorithm foo={1} />}></Route>
          <Route path="/write" element={<Write foo={1} />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
