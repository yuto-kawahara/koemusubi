import styled from "styled-components";

export const HeadTitle = (props) => {
  const { title, subTitle } = props;
  return (
    <>
      <STitleArea>
        <STitle>{title}</STitle>
        <SSubTitle>{subTitle}</SSubTitle>
      </STitleArea>
    </>
  );
};
const STitleArea = styled.div``;

const STitle = styled.h1`
  position: relative;
  color: #707070;
  text-align: center;
  font-size: 2.2rem;
  font-family: "Hannari", serif;
  margin: 0;

  &::after {
    position: absolute;
    bottom: 0;
    left: calc(50% - 150px);
    content: "";
    display: block;
    width: 300px;
    height: 3px;
    background-color: #707070;
  }
`;

const SSubTitle = styled.p`
  color: #707070;
  text-align: center;
  font-size: 1.5rem;
  font-family: "Hannari", serif;
  margin: 0;
`;
