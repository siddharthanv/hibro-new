import React from "react";
import Container from "@material-ui/core/Container";
import Category from "./Category";

function CategoryBox() {
  return (
    <Container className="categoryBox">
      <input
        type="text"
        name="search"
        placeholder="Search for a service e.g. Plumbing"
      />
      <Category />
    </Container>
  );
}

export default CategoryBox;
