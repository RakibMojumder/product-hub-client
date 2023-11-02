import styled from "styled-components";
import Products from "./Products.styles";
import Sidebar from "./sidebar/Sidebar.styles";

const ProductsContainer = () => {
  return (
    <Container>
      <Sidebar />
      <Products />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  height: 100%;
`;

export default ProductsContainer;
