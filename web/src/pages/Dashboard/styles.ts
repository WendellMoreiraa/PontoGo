import styled from "styled-components";

export const BodyDashboard = styled.div`
  display: flex;
  background-color: #f2f2f2;
  height: 100%;
`;

export const SideNav = styled.div`
  width: 180px;
  height: 987px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
export const Img = styled.img`
  width: 134px;
  height: 31.17px;
  margin: 40px 23px 40px 23px;
`;

export const Register = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #330693;
  padding: 40px 23px 40px 23px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  &:hover {
    border-top: 1px solid #00000014;
    border-bottom: 1px solid #00000014;
    border-left: 4px solid #330693;
  }
`;
export const ContaineLogout = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
export const TextLogout = styled.span`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 10px;
`;
