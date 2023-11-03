import { useContext } from "react";
import styled from "styled-components";
import { GLOBAL_CONTEXT } from "../../../context/GlobalSateProvider";

const Checkbox = ({ name }) => {
  const { categories, setCategories } = useContext(GLOBAL_CONTEXT);

  const handleChange = (name) => {
    const isExists = categories.find((category) => category === name);
    if (isExists) {
      const filteredCategories = categories.filter(
        (category) => category !== name
      );
      setCategories(filteredCategories);
    } else {
      setCategories((prev) => [...prev, name]);
    }
  };

  return (
    <Container>
      <label className="checkbox-container" htmlFor={name}>
        <span className="category">{name}</span>
        <input
          onChange={(e) => handleChange(e.target.name)}
          name={name}
          type="checkbox"
          id={name}
        />
        <span className="checkmark"></span>
      </label>
    </Container>
  );
};

const Container = styled.div`
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

export default Checkbox;
