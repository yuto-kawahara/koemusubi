import styled from "styled-components";
import { Footer } from "../atoms/layout/Footer";
import { Main } from "../atoms/layout/Main";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <SContainer>
        <Main>{children}</Main>
        <Footer />
      </SContainer>
    </>
  );
};

const SContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
