import * as React from "react";

interface IAppProps {
  foo: number;
}

const Posts: React.FunctionComponent<IAppProps> = (props) => {
  return <div> Posts </div>;
};

export default Posts;
