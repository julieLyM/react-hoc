import React from "react";
import characterPromise from "./service/characterPromise";
import withData from "./hoc/withData";

function Character({ data: { results = [] } }) {
  return <div>{results.map(result => result.name)}</div>;
}

export default withData(Character, characterPromise);
