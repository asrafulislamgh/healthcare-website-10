import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NewsSingle from "./NewsSingle";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((result) => setNews(result));
  }, []);
  console.log(news);
  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="my-5 pt-5">Latest News</h1>
        <Row md={3} lg={4} sm={2} xs={1} className="gy-4">
          {news.map((nws) => (
            <Col key={nws.id}>
              <NewsSingle nws={nws}></NewsSingle>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default News;
