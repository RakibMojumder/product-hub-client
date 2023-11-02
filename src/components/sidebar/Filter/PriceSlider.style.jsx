import MultiRangeSlider from "multi-range-slider-react";
import styled from "styled-components";

const PriceSlider = () => {
  return (
    <Container>
      <h4>Price Range:</h4>
      <MultiRangeSlider
        min={10}
        max={1000}
        minValue={10}
        maxValue={500}
        ruler={true}
        label={true}
        preventWheel={false}
        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 30px;
`;

export default PriceSlider;
