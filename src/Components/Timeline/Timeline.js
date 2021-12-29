import React from "react";
import "./Timeline.scss";
import timelineData from "./data";
import { SubItem } from "./SubItem";

export const Timeline = () =>
( <>
  <div id="roadmap">
    <div className="roadmap-title">
      Roadmap
    </div>
  
      <div className="timeline-container">
        {timelineData.map((data, index) => (
          <SubItem data={data} key={index} />
        ))}
      </div>)
      </div>
    </>
  );
