import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import User from "../user/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/users/`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {users.length === 0 ? (
          <Spinner className="mx-auto" animation="border" variant="success" />
        ) : (
          users.map(user => <User key={user.id} user={user} />)
        )}
      </Row>
    </Container>
  );
};

export default Users;
