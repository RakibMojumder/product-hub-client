import styled from "styled-components";
import Filter from "./Filter/Filter.styles";
import RadioButton from "./Filter/RadioButton";

const Sidebar = () => {
  return (
    <Container>
      <h3 style={{ marginBottom: "20px" }}>Filters</h3>
      <Filter />
      <RadioButton />
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  padding: 20px;
`;

export default Sidebar;
