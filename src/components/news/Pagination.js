import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Container from "react-bootstrap/Container";

function NewsPagination() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <Container>
        <Pagination>{items}</Pagination>
        <br />
      </Container>
    </div>
  );
}

export default NewsPagination;
