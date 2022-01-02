import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../../images/icon-about-2.png";
export const PrimaryButton = (props) => {
  const { children, to, src } = props;
  console.log(to);
  return (
    <>
      <SContainer>
        <Link to={to}>
          <SPage>
            <SImg src={Icon} alt="" />
            {children}
          </SPage>
        </Link>
      </SContainer>
    </>
  );
};

const SImg = styled.img`
  height: 60px;
  width: 60px;
`;

const SContainer = styled.div`
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  height: 65%;
  margin-right: 40px;
  & a {
    text-decoration: none;
  }
`;
const SPage = styled.p`
  background-color: #fdfaf2;
  color: #707070;
  padding: 36px 15px 50px 15px;
  margin: 0;
  display: flex;
  align-items: center;
  letter-spacing: 10px;
  box-shadow: 6px 6px 10px;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Hannari", serif;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
