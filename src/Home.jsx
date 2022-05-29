import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "./feature/Users";
import { useState } from "react";
import { Card } from "react-bootstrap";
import "reactjs-popup/dist/index.css";
import UpdateUser from "./UpdateUser";


const Home = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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
                <Card.Body>
                  <Card.Title>{user.name}</Card.Title>
                  <Card.Text>{user.username}</Card.Text>
                </Card.Body>
                <Card.Header>
                  <div className="update">
                    <button className="add btn-primary" onClick={togglePopup}>
                      Update
                    </button>
                    <button
                      className="add btn-danger"
                      onClick={() => {
                        dispatch(deleteUser({ id: user.id }));
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </Card.Header>
              </Card>
            );
          })}
        </div>
      </div>
      {isOpen && <UpdateUser handleClose={togglePopup}/>}
    </div>
  );
};

export default Home;
