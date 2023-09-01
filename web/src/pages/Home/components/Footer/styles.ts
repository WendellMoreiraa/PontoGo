import styled from "styled-components";
const media = {
  tablet: "@media (max-width: 768px)",
  mobile: "@media (max-width: 480px)",
};

export const ContainerNets = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.25px #8a53ff solid;
  border-bottom: 0.25px #8a53ff solid;
  margin-left: -120px;
  margin-right: -120px;
  height: 100px;
  ${media.mobile} {
  }
`;

export const TextName = styled.span`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  word-wrap: break-word;
  ${media.mobile} {
    font-size: 15px;
    margin-left: 15px;
  }
`;
export const TextDescripction = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  word-wrap: break-word;
  ${media.mobile} {
    font-size: 10px;
    margin-left: 15px;
  }
`;

export const Imgs = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 40px;
  ${media.tablet} {
    width: 30px;
    height: 30px;
  }
`;

export const ContainerInfos = styled.span`
  margin-right: 60px;
  display: flex;
  flex-direction: column;
`;
