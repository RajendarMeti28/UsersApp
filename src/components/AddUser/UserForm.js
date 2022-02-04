import "./UserForm.css";

const UserForm = function (props) {
  const submitHandler = function (e) {
    e.preventDefault();
    const username = e.target.username.value;
    const userage = e.target.age.value;
    const temp = { username, userage };
    if (userage > 0) {
      props.onUserForm(temp);
    } else {
      //alert("Invalid Input");
    }
    e.target.username.value = "";
    e.target.age.value = "";
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <br />
        <input type="text" name="username"></input>
        <br />
        <label>Age(Years)</label>
        <br />
        <input type="number" name="age"></input>
        <br></br>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default UserForm;
