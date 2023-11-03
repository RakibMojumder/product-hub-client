import styled from "styled-components";
import { HiOutlineMenu } from "react-icons/hi";
import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../context/GlobalSateProvider";

const Navbar = () => {
  const { setShowNavbar } = useContext(GLOBAL_CONTEXT);

  return (
    <Container>
      <div className="navbar">
        <HiOutlineMenu
          className="menubar"
          size={24}
          onClick={() => setShowNavbar((prev) => !prev)}
        />
        <h3>Product hub</h3>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: center;
  justify-items: center;

  .navbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 25px;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  @media only screen and (max-width: 428px) {
    .navbar {
      h3 {
        font-size: 18px;
      }
      .menubar {
        display: block;
      }
    }
  }
  @media only screen and (min-width: 428px) {
    .navbar {
      display: block;
      text-align: center;
      .menubar {
        display: none;
      }
    }
  }
`;

export default Navbar;
