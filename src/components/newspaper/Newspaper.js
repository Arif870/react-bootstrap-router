import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import News from "../news/News";

const Newspaper = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-04-30&sortBy=publishedAt&apiKey=90dbf1958cc7423da14e4d90356138ab"
    )
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, []);

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {news.length === 0 ? (
          <Spinner className="mx-auto" animation="grow" variant="danger" />
        ) : (
          news.map(allnews => <News allnews={allnews} />)
        )}
      </Row>
    </Container>
  );
};

export default Newspaper;
