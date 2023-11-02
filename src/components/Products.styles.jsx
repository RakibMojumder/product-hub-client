import styled from "styled-components";
import Product from "./Product.styles";

const Products = () => {
  return (
    <Container>
      {[...Array(10)].map((_, index) => (
        <Product key={index} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 90%;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  overflow-y: auto;
`;

export default Products;
