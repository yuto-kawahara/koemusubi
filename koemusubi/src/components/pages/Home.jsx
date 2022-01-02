import { memo } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import siteLogo from "../../images/site-logo.png";
import corpName from "../../images/site-corpname.png";

export const Home = memo(() => {
  return (
    <SBody>
      <SContainer>
        <PrimaryButton to="/about" src="../">
          こえむすびとは
        </PrimaryButton>
        <PrimaryButton to="/service">電話代行とは</PrimaryButton>
        <PrimaryButton to="/question">よくある質問</PrimaryButton>
        <PrimaryButton to="/contact">問い合わせ</PrimaryButton>
      </SContainer>
      <SSubTitle>〜 声で繋ぐ、あなたの想い 〜</SSubTitle>
    </SBody>
  );
});

const SBody = styled.div`
  min-width: 95vw;
  min-height: 96vh;
  background: url(${siteLogo}) top 10% left / 60% no-repeat,
    url(${corpName}) bottom 28% left 14% / 40% no-repeat;
`;

const SContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
`;
const SSubTitle = styled.p`
  position: absolute;
  bottom: 13%;
  left: 12%;
  color: #707070;
  font-size: 2rem;
  font-family: "Hannari", serif;
`;
