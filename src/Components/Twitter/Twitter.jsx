import React from "react";
import "./Twitter.css";
import LeftPanel from "../Left/LeftPanel";
import MiddlePanel from "../Middle/MiddlePanel";
import RightPanel from "../Right/RightPanel";

export default function Twitter() {
  return (
    <div className="Twitter">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
}
