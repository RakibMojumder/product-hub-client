import styled from "styled-components";

const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid black;
  color: ${(props) => (props.page === props.index ? "white" : "black")};
  background-color: ${(props) =>
    props.page === props.index ? "black" : "white"};
  cursor: pointer;
`;

export default Button;
