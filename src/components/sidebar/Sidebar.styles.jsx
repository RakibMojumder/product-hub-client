import styled from "styled-components";
import Filter from "./Filter/Filter.styles";
import RadioButton from "./Filter/RadioButton";
import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../context/GlobalSateProvider";

const Sidebar = () => {
  const { showNavbar, setShowNavbar } = useContext(GLOBAL_CONTEXT);

  return (
    <Container showNavbar={showNavbar}>
      <h3 style={{ marginBottom: "20px" }}>Filters</h3>
      <Filter />
      <RadioButton />
      <button
        className="show-result"
        onClick={() => setShowNavbar((prev) => !prev)}
      >
        Show Result
      </button>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  height: 100%;
  padding: 20px 0 40px 0;
  overflow-y: auto;

  @media only screen and (max-width: 428px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: ${(props) => (props.showNavbar ? "block" : "none")};
    background-color: white;
    padding: 20px;

    .show-result {
      width: 100%;
      padding: 10px 0;
      background-color: black;
      color: white;
      margin-top: 20px;
    }
  }

  @media only screen and (min-width: 428px) {
    .show-result {
      display: none;
    }
  }
`;

export default Sidebar;
