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
  width: 90%;
  margin: 40px auto 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export default Products;
