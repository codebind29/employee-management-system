import AllTask from "../../other/AllTask";
import CreateTask from "../../other/CreateTask";
import Header from "../../other/Header";

const AdminDashboard = ({ data, changeUser }) => {
  return (
    <div className="app-shell dashboard-shell">
      <div className="content-width">
        <Header data={data} changeUser={changeUser} />
        <div className="section-heading"><div><h2>Operations overview</h2><p>Create assignments and monitor team workload.</p></div></div>
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
