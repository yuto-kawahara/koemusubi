import { memo } from "react";
import styled from "styled-components";
import { HeadTitle } from "../atoms/heading/HeadTitle";
import iconAboutLeft from "../../images/icon-about-1.png";
import iconAboutRight from "../../images/icon-about-2.png";

export const About = memo(() => {
  return (
    <>
      <STitleWrapper>
        <SImgLeft src={iconAboutLeft} alt="" />
        <HeadTitle
          title="こえむすびについて"
          subTitle="What's koemusubi?"
        ></HeadTitle>
        <SImgRight src={iconAboutRight} alt="" />
      </STitleWrapper>
      <SMessage>
        はじめまして、電話代行会社「こえむすび」 代表の"みりお"と申します。
        <br />
        皆様1人1人とのご縁を大切にココナラにてサービスを開始させていただき、電話代行サービスはランキング1位、
        <br />
        プラチナランクとして活動をする中でより多くの皆様に電話代行サービスを知っていただきたく
        <br />
        この度ホームページを開設させていただきました。
      </SMessage>
      <HeadTitle title="代表者メッセージ" subTitle="Message"></HeadTitle>
      <SMessage>
        大阪で電話代行会社の代表をしています。
        <br />
        私自身が何か気になると黙っていられなくて、何でも電話しちゃうタイプなんです。（笑）
        <br />
        でもそうすることで自分の想いが叶ったり改善されることが多々ありますので、言わないと損な世の中なのです。
        <br />
        今までに1000件以上のご依頼を承ってまいりました。
        <br />
        独自のノウハウを最大限活用し、お望みの結果となるよう力を尽くさせていただきます。
        <br />
        代行であなたの想いを繋ぎます。
        <br />
        何でもお気軽にお問い合わせください。
      </SMessage>
    </>
  );
});
const STitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SImgLeft = styled.img`
  width: 60px;
  height: 60px;
`;
const SImgRight = styled.img`
  width: 60px;
  height: 60px;
`;
const SMessage = styled.p`
  margin: 0;
  padding: 3vh 0 6vh 0;
  color: #707070;
  text-align: center;
  line-height: 2.5rem;
  font-family: "Hannari", serif;
  font-size: 1.2rem;
`;
