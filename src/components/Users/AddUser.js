import React, { useState } from "react";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a valid name and age (non-empty values)",
      });
      return;
    }
    // console.log(username, age);
    props.onAddUser(username, age);
    setUsername("");
    setAge("");
  };
  const userChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  const onRemoveErrorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onRemoveError={onRemoveErrorHandler}
        />
      )}

      <div className="input">
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={userChangeHandler}
          />
          <label htmlFor="age">Age (Year)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={ageChangeHandler}
          />
          <button className="button" type="submit">
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUser;
