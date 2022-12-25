import { Create, Functions, Person } from "@mui/icons-material";

export type PageKey = "bio" | "posts" | "algorithms";

const Pages: PageKey[] = ["bio", "posts", "algorithms"];

const PageIcons = {
  bio: <Person sx={{ marginRight: "4px" }} />,
  posts: <Create sx={{ marginRight: "4px" }} />,
  algorithms: <Functions sx={{ marginRight: "4px" }} />,
};

export { Pages, PageIcons };
