import styled from "styled-components";

const categories = [
  { id: 101, name: "CategoryA" },
  { id: 102, name: "CategoryA" },
  { id: 103, name: "CategoryA" },
  { id: 104, name: "CategoryA" },
];

const Category = () => {
  return (
    <Container>
      <h4>Product Category</h4>
      {categories.map((category) => (
        <label
          key={category.id}
          className="checkbox-container"
          htmlFor={category.id}
        >
          <span className="category">{category.name}</span>
          <input type="checkbox" id={category.id} />
          <span className="checkmark"></span>
        </label>
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 40px;

  h4 {
    margin-bottom: 15px;
  }

  .checkbox-container {
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 18px;
    cursor: pointer;
    font-size: 16px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .category {
    display: inline-block;
    margin-top: 5px;
  }

  /* Hide the browser's default checkbox */
  .checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border: 1px solid #aaa;
    border-radius: 3px;
  }

  .checkbox-container input:checked ~ .checkmark {
    background-color: #161414;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .checkbox-container input:checked ~ .checkmark:after {
    display: block;
  }

  .checkbox-container .checkmark:after {
    left: 8px;
    top: 3px;
    width: 5px;
    height: 12px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default Category;
