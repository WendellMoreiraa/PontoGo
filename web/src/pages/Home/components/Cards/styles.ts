import styled from "styled-components";
const media = {
  tablet: `(max-width: 768px)`,
  mobile: `(max-width: 480px)`,
};
export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 333px;
  height: 491px;
  background-color: rgba(138, 83, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 0.5px #8a53ff solid;
  margin: 0;
  padding: 0;
  word-wrap: break-word;
  &:hover {
    background-color: rgba(138, 83, 255, 0.3);
    backdrop-filter: blur(15px);
  }
`;
export const FlatCard = styled.span`
  color: #ffffff;
  font-size: 20px;
  font-weight: 400;
  word-wrap: break-word;
  margin-bottom: 15px;
  ${media.tablet} {
    font-size: 12px;
  }
`;
export const ValueCard = styled.span`
  color: #ffffff;
  font-size: 50px;
  font-weight: 800;
  word-wrap: break-word;
  margin-bottom: 10px;
`;

export const CollaboratorsCard = styled.span`
  color: #8a53ff;
  font-size: 16px;
  font-weight: 200;
  word-wrap: break-word;
  margin-bottom: 20px;
`;
export const DescriptionCard = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  word-wrap: break-word;
  margin-bottom: 15px;
`;

export const DescriptionCardNull = styled.span`
  color: #ffffff;
  font-size: 16px;
  font-weight: 300;
  word-wrap: break-word;
  opacity: 0.3;
`;
