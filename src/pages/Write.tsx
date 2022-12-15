import * as React from "react";

interface IAppProps {
  foo: number;
}

const Write: React.FunctionComponent<IAppProps> = (props) => {
  return <div> Write </div>;
};

export default Write;
