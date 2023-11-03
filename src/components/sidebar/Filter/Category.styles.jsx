import styled from "styled-components";
import Checkbox from "./Checkbox.styles";

const Category = () => {
  return (
    <Container>
      <h4>Product Category</h4>
      <Checkbox name={"Fashion"} />
      <Checkbox name={"Baby"} />
      <Checkbox name={"Kitchen"} />
      <Checkbox name={"Beauty"} />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 40px;

  h4 {
    margin-bottom: 15px;
  }
`;

export default Category;
