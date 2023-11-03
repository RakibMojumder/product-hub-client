import MultiRangeSlider from "multi-range-slider-react";
import { useContext } from "react";
import styled from "styled-components";
import { GLOBAL_CONTEXT } from "../../../context/GlobalSateProvider";

const PriceSlider = () => {
  const { minValue, maxValue, setMaxValue, setMinValue } =
    useContext(GLOBAL_CONTEXT);

  const handleInput = (e) => {
    setMinValue(e.minValue);
    setMaxValue(e.maxValue);
  };

  return (
    <Container>
      <h4>Price Range:</h4>
      <MultiRangeSlider
        min={100}
        max={2000}
        minValue={minValue}
        maxValue={maxValue}
        ruler={true}
        label={true}
        onInput={(e) => handleInput(e)}
      />
      <div className="price">
        <div>
          <p>Min:</p>
          <p>{minValue}</p>
        </div>
        <div>
          <p>Max:</p>
          <p>{maxValue}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 30px;

  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    font-size: 14px;
    padding: 0 20px;
  }
`;

export default PriceSlider;
