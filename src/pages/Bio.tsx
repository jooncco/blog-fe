import * as React from "react";

interface IAppProps {
  foo: number;
}

const Bio: React.FunctionComponent<IAppProps> = (props) => {
  return <div> Bio </div>;
};

export default Bio;
