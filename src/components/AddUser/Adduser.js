import UserForm from "./UserForm";
import "./AddUser.css";

const AddUser = function (props) {
  const userFormHandler = function (userform) {
    props.onAddUser(userform);
  };

  return (
    <div className="addUser">
      <UserForm onUserForm={userFormHandler}></UserForm>
    </div>
  );
};

export default AddUser;
