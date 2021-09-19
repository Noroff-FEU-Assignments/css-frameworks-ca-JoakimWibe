import React from "react";
import Pagination from "./Pagination";
import Cards from "./Cards";
import Container from "react-bootstrap/Container";

function News() {
  return (
    <>
      <Container>
        <h1>News</h1>
      </Container>
      <Pagination />
      <Cards />
      <Pagination />
    </>
  );
}

export default News;
