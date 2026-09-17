import Header from '../../other/Header';
import TaskListNumbers from '../../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <div className='app-shell dashboard-shell'>
      <div className='content-width'>
        <Header data={data} changeUser={changeUser}/>
        <div className='section-heading'><div><h2>My tasks</h2><p>Stay on top of your priorities and progress.</p></div></div>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
      </div>
    </div>
  );
};

export default EmployeeDashboard;