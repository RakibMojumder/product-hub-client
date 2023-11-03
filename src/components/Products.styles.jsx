import styled from "styled-components";
import Product from "./Product.styles";
import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../context/GlobalSateProvider";
import Pagination from "./Pagination.styles";

const Products = () => {
  const { products } = useContext(GLOBAL_CONTEXT);

  return (
    <Container>
      {products.length > 0 ? (
        <>
          <div className="product-container">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <Pagination />
        </>
      ) : (
        <div className="no-product-found">No product found</div>
      )}
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  padding: 40px 0;
  overflow-y: auto;

  .no-product-found {
    text-align: center;
    margin-top: 40px;
  }

  .product-container {
    display: grid;
    grid-gap: 20px;
  }

  @media only screen and (min-width: 620px) {
    .product-container {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (min-width: 768px) {
    .product-container {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (min-width: 1200px) {
    .product-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
`;

export default Products;
