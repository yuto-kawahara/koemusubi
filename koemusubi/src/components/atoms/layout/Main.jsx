import styled from "styled-components";
import bgBlockBottom from "../../../images/bg-block.png";
import bgBlockTop from "../../../images/bg-block-2.png";
import bgFlower from "../../../images/bg-flower.png";

export const Main = (props) => {
  const { children } = props;
  return (
    <>
      <SMain>
        <SFlower></SFlower>
        <SFlower1></SFlower1>
        <SFlower2></SFlower2>
        <SFlower3></SFlower3>
        <SFlower4></SFlower4>
        {children}
      </SMain>
    </>
  );
};

const SMain = styled.main`
  min-height: 96vh;
  background: url(${bgBlockBottom}) bottom left no-repeat,
    url(${bgBlockTop}) top right no-repeat,
    linear-gradient(
      to bottom,
      rgba(150, 251, 196, 0.6) 0%,
      rgba(255, 212, 42, 0.6) 100%
    );
`;

const SFlower = styled.div`
  position: absolute;
  top: 0;
  left: 3%;
  width: 200px;
  height: 200px;
  background: url(${bgFlower}) top left / contain no-repeat;
  animation: 8s linear infinite rotation1;
  @keyframes rotation1 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SFlower1 = styled(SFlower)`
  width: 140px;
  height: 140px;
  top: 44%;
  left: 15%;
`;
const SFlower2 = styled(SFlower)`
  top: 60%;
  left: 50%;
`;
const SFlower3 = styled(SFlower)`
  width: 100px;
  height: 100px;
  left: 50%;
`;
const SFlower4 = styled(SFlower)`
  width: 80px;
  height: 80px;
  top: 60%;
  left: 80%;
`;
