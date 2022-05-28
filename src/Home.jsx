import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./feature/Users";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Home = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  // const [open, setOpen] = useState(false);
  // const closeModal = () => setOpen(false);
  return (
    <div className="home">
      {" "}
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <button
          className="add btn-primary"
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            );
          }}
        >
          add
        </button>
      </div>
      <div className="displayUsers">
        <div className="usersContainer">
          {userList.map((user) => {
            return (
              <Card className="card">
                <Card.Header>{user.id}</Card.Header>
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.username}</Card.Text>
                  <div className="update">
                    <input
                      type="text"
                      placeholder="New Username..."
                      onChange={(event) => setNewUsername(event.target.value)}
                      required
                    />
                    <button
                      className="add btn-primary"
                      onClick={() => {
                        dispatch(
                          updateUsername({ id: user.id, username: newUsername })
                        );
                      }}
                    >
                      {" "}
                      Update
                    </button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
