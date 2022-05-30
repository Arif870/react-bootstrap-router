import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const User = props => {
  const { name, email, id } = props.user;

  return (
    <Col style={{ cursor: "pointer" }}>
      <Card>
        <Card.Body>
          <Card.Title>ID : {id}</Card.Title>
          <Card.Title>Name : {name}</Card.Title>
          <Card.Text>Email : {email}</Card.Text>
        </Card.Body>
        <Link to={`/users/${id}`}>
          <Button className="mb-4" variant="success">
            View Profile
          </Button>
        </Link>
      </Card>
    </Col>
  );
};

export default User;
