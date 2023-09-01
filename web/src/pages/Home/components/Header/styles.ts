import styled from "styled-components";
const media = {
  tablet: "@media (max-width: 768px)",
  mobile: "@media (max-width: 480px)",
};

export const NavBar = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 55px;
  ${media.tablet} {
    padding: 0px 20px;
  }
  ${media.mobile} {
  }
`;

export const LogoHeader = styled.img`
  width: 164px;
  height: 38.2px;
  ${media.mobile} {
    width: 100px;
    height: 30px;
  }
`;
export const ContainerBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;
export const TextBar = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  word-wrap: "break-word";
  ${media.mobile} {
    width: 100px;
    height: 30px;
  }
`;
