import React from "react";
import { Card, Button } from "react-bootstrap";
import { updateUsername } from "./feature/Users";
import { useState } from "react";
import { useDispatch } from "react-redux";

const UpdateUser = (props, user) => {
  const dispatch = useDispatch();
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className="productBody">
      <Card className="productPopUp">
        <Card.Title className="popupTitle">
          Update User
          <Button
            style={{
              borderRadius: "50%",
              background: "#4b0908",
              border: "none",
              right: 10,
              top: 10,
              position: "absolute",
            }}
            onClick={props.handleClose}
          >
            &#x78;
          </Button>
          {props.content}
        </Card.Title>
        <Card.Body>
          <input
            type="text"
            placeholder="New Username..."
            onChange={(event) => setNewUsername(event.target.value)}
            required
          />
          <button
            className="add btn-primary"
            onClick={() => {
              dispatch(updateUsername({ id: user.id, username: newUsername }));
            }}
          >
            Update
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UpdateUser;
