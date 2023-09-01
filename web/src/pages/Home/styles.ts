import styled from "styled-components";
import backgroundImage from "../../assets/images/bgHomes.png";
import Smoke1 from "../../assets/images/smokeTopRight.png";
import Smoke2 from "../../assets/images/smokeCenterLeft.png";
import Smoke3 from "../../assets/images/smokeBottomLeft.png";

const media = {
  tablet: "@media (max-width: 768px)",
  mobile: "@media (max-width: 480px)",
};

export const BodyHome = styled.div`
  background-color: rgba(18, 0, 57, 1);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0px 120px 0px 120px;
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  ${media.tablet} {
    padding: 0px;
  }
`;

export const Container = styled.div`
  padding-top: 138px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${media.tablet} {
    flex-direction: column;
    margin: 0 20px;
  }
`;

export const ContainerInfos = styled.div`
  width: 520px;
  height: 343px;

  ${media.mobile} {
    width: initial;
    height: initial;
  }
`;
export const SubTitle = styled.span`
  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3.96px;
  word-wrap: break-word;
  margin-bottom: 11px;
  ${media.mobile} {
    width: initial;
    height: initial;
  }
`;
export const Title = styled.h1`
  color: #ffffff;
  font-size: 40px;
  font-weight: 800;
  word-wrap: break-word;
  margin-bottom: 11px;
  width: 520px;
  height: 120px;
  word-wrap: break-word;
  ${media.mobile} {
    width: initial;
    height: initial;
  }
`;
export const TitlePuple = styled.span`
  color: #8a53ff;
  margin-left: 5px;
  word-wrap: break-word;
`;
export const Description = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  word-wrap: break-word;
  width: 476px;
  height: 81px;
  word-wrap: break-word;
  ${media.mobile} {
    width: initial;
    height: initial;
  }
`;
export const ContainerButton = styled.div`
  margin-top: 30px;
`;
export const Image = styled.img`
  width: 703.75px;
  ${media.mobile} {
    width: 402px;
  }
`;

export const TitleCard = styled.h1`
  font-size: 40px;
  color: #ffffff;
  word-wrap: break-word;
  font-weight: 800;
  width: 518pxpx;
  height: 60px;
  ${media.mobile} {
    height: initial;
    width: initial;
    margin: 0 20px;
    margin-bottom: 24px;
  }
`;
export const DescriptionCard = styled.p`
  font-size: 20px;
  width: 641px;
  word-wrap: break-word;
  height: 60px;
  color: #ffffff;
  font-weight: 400;
  ${media.mobile} {
    height: initial;
    width: initial;
    margin: 0 20px;
  }
`;

export const InfoCard = styled.div`
  padding-top: 90px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Rights = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  padding-bottom: 60px;
`;
export const BorderedTextTwo = styled.div`
  height: 0.1px;
  width: 100%;
  background-color: #8a53ff;
  margin-right: -120px;
`;
export const BorderedTextOne = styled.div`
  height: 0.1px;
  width: 100%;
  background-color: #8a53ff;
  margin-left: -120px;
`;

export const Text = styled.span`
  color: white;

  font-size: 14px;
  font-weight: 400;
  word-wrap: break-word;
  padding: 0 30px 0 30px;
`;

export const SmokeOne = styled.div`
  position: absolute;
  width: 619px;
  height: 546px;
  top: 0px;
  left: 1112px;
  opacity: 0.5;
  background-image: url(${Smoke1});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;
export const SmokeTwo = styled.div`
  position: absolute;
  width: 965px;
  height: 695px;
  top: 700px;
  left: 0px;
  opacity: 0.5;
  background-image: url(${Smoke2});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;
export const SmokeThird = styled.div`
  position: absolute;
  width: 782px;
  height: 578px;
  top: 1338px;
  left: 950px;
  opacity: 0.5;

  background-image: url(${Smoke3});
  background-size: cover;
  background-position: center;
  z-index: 0;
`;
