import "./User.css";

const User = function (props) {
  const toDeleteHandler = function (e) {
    props.onDelete(props.id);
  };

  return (
    <div className="individualUser">
      <p onClick={toDeleteHandler}>
        {props.username} ({props.userage} years old..)
      </p>
    </div>
  );
};

export default User;
