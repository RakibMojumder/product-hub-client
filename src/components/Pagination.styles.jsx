import { useContext } from "react";
import styled from "styled-components";
import { GLOBAL_CONTEXT } from "../context/GlobalSateProvider";
import Button from "./Button.styles";

const Pagination = () => {
  const { page, totalPage, setPage } = useContext(GLOBAL_CONTEXT);

  return (
    <Container page={page}>
      <div className="button-container">
        {totalPage > 1 &&
          [...Array(totalPage)].map((_, index) => (
            <Button
              key={index}
              index={index}
              page={page}
              onClick={() => setPage(index)}
            >
              {index + 1}
            </Button>
          ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: 40px 0 80px;

  .button-container {
    margin: auto;
    display: flex;
    gap: 10px;
    justify-content: center;
  }
`;

export default Pagination;
