import styled from "styled-components";

const RadioButton = () => {
  return (
    <Container>
      <h4>Sort By</h4>
      <label className="radio-container">
        Low to High
        <input type="radio" name="radio" />
        <span className="checkmark"></span>
      </label>
      <label className="radio-container">
        High to Low
        <input type="radio" name="radio" />
        <span className="checkmark"></span>
      </label>
    </Container>
  );
};

const Container = styled.div`
  h4 {
    margin-bottom: 15px;
  }

  .radio-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .radio-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid #aaa;
    border-radius: 50%;
  }

  .radio-container input:checked ~ .checkmark {
    background-color: #232121;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .radio-container input:checked ~ .checkmark:after {
    display: block;
  }

  .radio-container .checkmark:after {
    top: 6px;
    left: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
  }
`;

export default RadioButton;
