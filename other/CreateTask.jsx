import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const userData = useContext(AuthContext);
  const employee = userData?.employee ?? [];
  const setUserData = userData?.setUserData;

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = employee.map((elem) => {
      if (asignTo !== elem.firstName) {
        return elem;
      }

      return {
        ...elem,
        tasks: [...elem.tasks, task],
        taskCounts: {
          ...elem.taskCounts,
          newTask: elem.taskCounts.newTask + 1,
        },
      };
    });

    localStorage.setItem("employee", JSON.stringify(data));
    setUserData((currentData) => ({ ...currentData, employee: data }));
    console.log("Updated Employees:", data);

    setTaskTitle("");
    setCategory("");
    setAsignTo("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div>
      <div className="form-panel">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="task-form"
        >
          <div className="field">
            <div>
                <label>
                Task Title
                </label>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className=""
                type="text"
                placeholder="Make a UI design"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-slate-300">Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                type="date"
                name=""
                id=""
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-slate-300">
                Assign to
              </h3>
              <input
                value={asignTo}
                onChange={(e) => {
                  setAsignTo(e.target.value);
                }}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                type="text"
                placeholder="Employee Name"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-slate-300">
                Category
              </h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                type="text"
                placeholder="Category"
              />
            </div>
          </div>

          <div className="field full">
            <div className="w-full">
              <label>
                Description
              </label>
              <textarea
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
                className=""
                name=""
                id=""
                placeholder="Describe the task..."
              />
            </div>

            <button className="submit-button">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
