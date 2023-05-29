import React from "react";
import "./UserList.css";

const UserList = (props) => {
  console.log(props.users);
  return (
    <div className="users">
      <ul>
        {props.users.map((users) => {
          return (
            <li key={users.id}>
              {users.userName} ({users.userAge} year's Old)
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
