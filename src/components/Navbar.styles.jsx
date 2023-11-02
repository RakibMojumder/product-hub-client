import styled from "styled-components";

const Navbar = () => {
  return (
    <Container>
      <h3>Product Hub</h3>
    </Container>
  );
};

const Container = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  justify-items: center;
  border-bottom: 1px solid #ddd;
  box-shadow: 0px 2px 2px #ddd;

  h3 {
    font-size: 25px;
    font-weight: 700;
  }
`;

export default Navbar;
