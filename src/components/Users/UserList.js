import User from "./User";
import "./UserList.css";

const UserList = function (props) {
  const deleteHandler = function (deleteId) {
    props.onUserDelete(deleteId);
  };

  return (
    <div className="userList">
      {props.userData.map((user) => {
        return (
          <User
            onDelete={deleteHandler}
            key={Math.random()}
            id={user.id}
            username={user.name}
            userage={user.age}
          ></User>
        );
      })}
    </div>
  );
};

export default UserList;
