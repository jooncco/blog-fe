import * as React from "react";

interface IAppProps {
  foo: number;
}

const Post: React.FunctionComponent<IAppProps> = (props) => {
  return <div> Post </div>;
};

export default Post;
