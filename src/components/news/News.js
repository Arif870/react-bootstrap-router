import React from "react";
import { Card, Col } from "react-bootstrap";

const News = props => {
  const { author, description, urlToImage } = props.allnews;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{author}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default News;
