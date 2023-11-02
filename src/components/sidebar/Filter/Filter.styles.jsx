import styled from "styled-components";
import PriceSlider from "./PriceSlider.style";
import Category from "./Category.styles";

const Filter = () => {
  return (
    <Container>
      <PriceSlider />
      <Category />
    </Container>
  );
};

const Container = styled.div``;

export default Filter;
