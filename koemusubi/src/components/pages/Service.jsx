import { memo } from "react";
import styled from "styled-components";
import { HeadTitle } from "../atoms/heading/HeadTitle";

export const Service = memo(() => {
  return (
    <>
      <STitleWrapper>
        {/* <SImgLeft src={iconAboutLeft} alt="" /> */}
        <HeadTitle title="電話代行とは" subTitle="Telephone Agent"></HeadTitle>
        {/* <SImgRight src={iconAboutRight} alt="" /> */}
      </STitleWrapper>
      <SMessage>
        自分では上手く伝えられない、言いにくい、電話が苦手など、様々な理由から電話を避けておられませんか？
        <br />
        電話しないことで損をしてしまうことがあり、電話でしっかり想いを伝えることで受けられる恩恵がたくさんあります。
        <br />
        そんな時、あなたの代わりにどんなお電話でも代行させていただきます。
        <br />
        最短でお打ち合わせを行い、よりスムーズに遂行するために様々な提案をさせていただきます。{" "}
        <br />
        専用携帯を使用するので、お取引後の想定外の事態へのフォローも確実です。
        <br />
        (※犯罪リスクのあるご依頼はお断りさせていただきます) <br />
        <SUseCase>
          <SUseTitle>&lt; ご利用シーン &gt;</SUseTitle>
          ・欠席、欠勤、休職、退職の電話 <br />
          ・お詫びの電話 <br />
          ・サプライズや呼び出し電話 <br />
          ・会社や機関などに密告、問い合わせの電話 <br />
          ・モーニングコール <br />
          ・自分では言いづらいクレーム(苦情)の電話 <br />
          ・アリバイのための電話 <br />
          ・パートナーの浮気に関する事案 <br />
          ・着信拒否されている相手への電話 <br />
          ・アポ電話、営業電話の代行(月500件まで) etc... <br />
        </SUseCase>
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

const SUseCase = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  width: 50%;
  border-radius: 10px;
  text-align: left;
  margin: 30px auto;
  padding: 10px;
`;
const SUseTitle = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.6rem;
  margin-top: 0;
  margin-bottom: 20px;
  text-decoration: underline;
  text-underline-offset: 0.3em;
`;
