import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  const currentEmployee = authData?.employee?.find(
    (account) => account.email === loggedInUserData?.email,
  );

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!authData) {
      return;
    }

    const admin = authData.admin?.find(
      (account) => account.email === email && account.password === password,
    );

    if (admin) {
      setUser("admin");
      setLoggedInUserData(admin);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", data: admin }),
      );
      return;
    }

    const employee = authData.employee?.find(
      (account) => account.email === email && account.password === password,
    );

    if (employee) {
      setUser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employee }),
      );
      return;
    }

    if (authData) {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={currentEmployee || loggedInUserData} /> : null) }
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard /> */}
    </>
  );
};

export default App;
