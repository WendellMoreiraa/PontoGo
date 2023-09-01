import styled from "styled-components";

export const BodyLogin = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: radial-gradient(
    140.01% 116.59% at 100.7% -204.96%,
    rgba(138, 83, 255, 0.8) 0%,
    rgba(150.73, 104.6, 248.88, 0.67) 29%,
    rgba(161.39, 122.68, 243.75, 0.56) 71%,
    rgba(153.39, 109.1, 247.6, 0.37) 89%,
    rgba(138, 83, 255, 0) 100%
  );
`;
export const ImageSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImageLogin = styled.img`
  width: 585px;
  height: 663px;
  margin-bottom: 20px;
`;
export const TextImage = styled.div`
  color: #330693;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleImage = styled.h1`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;
export const DescripctionImage = styled.p`
  font-size: 25px;
  font-weight: 400;
  line-height: 38px;
  width: 381px;
  text-align: center;
  padding-bottom: 79px;
`;
export const SignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 400px;
  height: 471px;
`;

export const ImgIcon = styled.img`
  width: 322.39px;
  height: 75px;
`;
export const FormSigIn = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 30px;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  margin-bottom: 23px;
  color: #330693;
`;
export const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Label = styled.span``;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border: 1px rgba(32, 41, 46, 0.3) solid;
  &::placeholder {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
  &:focus {
    outline: none;
    border: 0.5px #330693 solid;
  }
`;
export const MissingPassword = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: #330693;
  line-height: 22.5px;
  margin-top: 10px;
`;
