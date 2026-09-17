import React from "react";

const AcceptTask = ({data}) => {
  return (
    <div className="task-card active">
      <div className="task-meta"><h3 className="task-tag">{data.category}</h3><h4>{data.taskDate || "No date"}</h4>
      </div>
      <h2>{data.taskTitle}</h2><p>{data.taskDescription}</p>
      <div className="task-actions">
        <button className="button-complete">Mark completed</button><button className="button-fail">Mark failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
