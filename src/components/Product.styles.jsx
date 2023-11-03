import styled from "styled-components";
import img from "../assets/download.jpg";

const Product = ({ product }) => {
  return (
    <Container>
      <img src={product.image} alt="" />
      <div className="product-details">
        <h4>{product.name}</h4>
        <p className="product-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing
        </p>
        <p>
          Price: <span className="price">${product.price}</span>
        </p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 375px;
  border: 1px solid #ddd;
  border-radius: 8px;
  flex-grow: 1;

  img {
    width: 100%;
    height: 230px;
    border-radius: 8px 8px 0 0;
  }

  .product-details {
    padding: 12px;

    h4 {
      font-size: 15px;
    }

    .product-desc {
      font-size: 14px;
      margin: 10px 0;
    }

    .price {
      font-weight: 600;
      color: blue;
    }
  }
`;

export default Product;
