import styled from "styled-components";
const media = {
  tablet: "@media (max-width: 768px)",
  mobile: "@media (max-width: 480px)",
};

export const Container = styled.div`
  margin-top: 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tablet} {
    padding: 0 20px;
  }
`;

export const Img1 = styled.img`
  width: 200.57px;

  ${media.tablet} {
    width: 120px;
    height: 50px;
  }
  ${media.mobile} {
    width: 100px;
  }
`;
export const Img2 = styled.img`
  width: 213px;

  ${media.tablet} {
    width: 100px;
  }
  ${media.mobile} {
    width: 100px;
  }
`;

export const Img3 = styled.img`
  width: 164.97px;

  ${media.tablet} {
    width: 100px;

    ${media.mobile} {
      width: 80px;
    }
  }
`;

export const Img4 = styled.img`
  width: 283.08px;

  ${media.tablet} {
    width: 200px;
  }
  ${media.mobile} {
    width: 100px;
  }
`;
