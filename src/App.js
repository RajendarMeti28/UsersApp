import { useState } from "react";
import "./App.css";
import AddUser from "./components/AddUser/Adduser";
import UserList from "./components/Users/UserList";

const DEFAULT_USERS = [
  { id: 1, name: "Rajendar", age: 20 },
  { id: 2, name: "Tyler", age: 25 },
];

function App() {
  const [users, setUsers] = useState(DEFAULT_USERS);

  const addUserHandler = function (user) {
    const newUser = {
      id: Math.random(),
      name: user.username,
      age: Number(user.userage),
    };
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  const userDeleteHandler = function (deleteId) {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== deleteId);
    });
  };

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList onUserDelete={userDeleteHandler} userData={users}></UserList>
    </div>
  );
}

export default App;
