import React from "react";
import { WorkData } from "../../../data/work";
import WorkCard from "./work-card";
import "./work.css";
import Seperator from "../../common/seperator/index";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Seperator />
      <label className="section-title">Education</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Work;
