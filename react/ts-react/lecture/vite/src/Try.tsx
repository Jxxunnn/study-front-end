import React, { memo } from "react";
import { TryInfo } from "./types";

const Try = memo(({ tryInfo }: { tryInfo: TryInfo }) => {
  return (
    <li>
      <div>{tryInfo.type}</div>
      <div>{tryInfo.result}</div>
    </li>
  );
});

export default Try;
