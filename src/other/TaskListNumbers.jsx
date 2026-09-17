import React from "react";

const TaskListNumbers = ({data}) => {
  return (
    <div className="stats-grid">
      <div className="stat-card new">
        <strong>{data.taskCounts.newTask}</strong><span>New tasks</span>
      </div>
      <div className="stat-card done">
        <strong>{data.taskCounts.completed}</strong><span>Completed</span>
      </div>
      <div className="stat-card active">
        <strong>{data.taskCounts.active}</strong><span>Accepted</span>
      </div>
      <div className="stat-card failed">
        <strong>{data.taskCounts.failed}</strong><span>Failed</span>
      </div>
    </div>
  );
};

export default TaskListNumbers;
