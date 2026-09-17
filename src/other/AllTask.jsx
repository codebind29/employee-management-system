import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const userData = useContext(AuthContext);
  const employees = userData?.employee ?? [];

  return (
    <div className="table-panel">
      <div className="table-row table-header">
        <strong>Employee</strong><strong>New</strong><strong>Active</strong><strong>Completed</strong><strong>Failed</strong>
      </div>
      <div>
        {employees.map(function (elem) {
          return (
            <div
              key={elem.id}
              className="table-row"
            >
              <strong>{elem.firstName}</strong><span>{elem.taskCounts.newTask}</span><span>{elem.taskCounts.active}</span><span>{elem.taskCounts.completed}</span><span>{elem.taskCounts.failed}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
