# 👥 Employee Management System

A React-based Employee Management System designed to manage employees and their tasks through a simple dashboard interface.

## ✨ Features

- 🔐 Admin and Employee Login
- 🚪 Logout functionality
- 👤 Employee dashboard
- 📋 Task creation
- 👨‍💼 Assign tasks to employees
- 📝 Task title and description
- 📅 Task due date
- 🏷️ Task category
- 📊 Task statistics
- 💾 LocalStorage data persistence
- 🌙 Dark and Light mode
- 📱 Responsive user interface

## 🛠️ Tech Stack

- React.js
- JavaScript
- Tailwind CSS
- CSS
- Context API
- LocalStorage
- Vite

## 📚 React Concepts Used

- Functional Components
- JSX
- useState
- useEffect
- useContext
- Context API
- Props
- Conditional Rendering
- Array map()
- Event Handling
- Form Handling
- LocalStorage
- Component-based Architecture

## ⚙️ How It Works

### 1. Login

Users enter their email and password.

The application checks the credentials and identifies whether the user is an Admin or Employee.
<img width="1366" height="642" alt="Screenshot (77)" src="https://github.com/user-attachments/assets/c5a0ce2f-0ce7-44b4-91a3-effa985eb024" />

### 2. Dashboard

After successful login, the appropriate dashboard is displayed.

### Employee Dashboard :
<img width="1366" height="644" alt="Screenshot (78)" src="https://github.com/user-attachments/assets/de272f19-02f9-4e3b-a527-53d8c7d882a2" />

### Admin Dashboard
<img width="1231" height="651" alt="image" src="https://github.com/user-attachments/assets/e5437bfd-efd4-4247-bcac-8e36bce32ee4" />


### 3. Create Task

The task creation form allows the user to enter:

- Task title
- Description
- Date
- Employee name
- Category

The task is then assigned to the selected employee.

### 4. Task Tracking

Employee task statistics are displayed using categories such as:

- New Tasks
- Accepted Tasks
- Completed Tasks
- Failed Tasks

### 5. Data Persistence

Employee and task information is stored in the browser using LocalStorage.

### 6. Logout

The user can log out from the dashboard and return to the login screen.
