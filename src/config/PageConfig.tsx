import { Create, Functions, Person } from "@mui/icons-material";

export type PageKey = "bio" | "posts" | "algorithms";

const pageKeys: PageKey[] = ["bio", "posts", "algorithms"];

const pageIcons = {
  bio: <Person />,
  posts: <Create />,
  algorithms: <Functions />,
};

export { pageKeys, pageIcons };
