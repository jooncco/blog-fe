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
          <Route path="/bio" element={<Bio />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/posts/:id" element={<Post />}></Route>
          <Route path="/algorithms" element={<Algorithms />}></Route>
          <Route path="/algorithms/:id" element={<Algorithm />}></Route>
          <Route path="/write" element={<Write />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
