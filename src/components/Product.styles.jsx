import styled from "styled-components";
import img from "../assets/download.jpg";

const Product = () => {
  return (
    <Container>
      <img src={img} alt="" />
      <div className="product-details">
        <h3>This is my product</h3>
        <p className="product-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex fugit
        </p>
        <p>
          Price: <span className="price">$120</span>
        </p>
        <button>But now</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
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

    .product-desc {
      font-size: 15px;
      margin: 10px 0;
    }

    .price {
      font-weight: 600;
      color: blue;
    }

    button {
      padding: 10px 0;
      width: 100%;
      background-color: #161414;
      color: white;
      border: none;
      margin-top: 10px;
      text-transform: uppercase;
      border-radius: 3px;
    }
  }
`;

export default Product;
