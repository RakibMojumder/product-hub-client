import React from "react";
import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <h3>Filters</h3>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  border: 2px solid red;
`;

export default Sidebar;
