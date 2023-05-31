import styled from "styled-components";

export const StyledAbout = styled.div`
  @keyframes top-about {
    0% {
      margin-top: 60px;
      opacity: 0;
    }

    100% {
      margin-top: 30px;
      opacity: 0.8;
    }
  }

  width: 100%;
  max-width: 540px;
  height: 700px;
  background-color: rgba(0, 0, 0, 0.9);
  margin: 30px auto 0px;
  animation: top-about 0.5s ease-in;
  padding: 24px 30px;
  overflow: auto;

  hr {
    width: 120px;
    height: 1px;
    border: none;
    background-color: #4ceb95;
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 2px;
  color: #aaaaaa;
`;

export const Learn = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  color: white;
  margin-top: 5px;
  text-transform: uppercase;
`;

export const ProfilePict = styled.img`
  width: 100%;
  min-height: 360px;
  margin: 15px auto 0px;
  display: block;
  filter: invert(0%) sepia(89%) saturate(0%) hue-rotate(257deg) brightness(108%)
    contrast(99%);
`;

export const Prof = styled(Learn)`
  font-size: 26px;
  line-height: 31.2px;
  color: #18d26e;
  margin-top: 24px;
  text-transform: none;
`;

export const Arrow = styled.img`
  width: 16px;
  height: 16px;
  transform: rotate(90deg);
  /* filter: invert(85%) sepia(32%) saturate(5710%) hue-rotate(90deg)
    brightness(200%) contrast(82%); */
  filter: invert(81%) sepia(15%) saturate(1645%) hue-rotate(88deg)
    brightness(99%) contrast(87%);
`;

export const AbDiv = styled.div`
  margin: 16px auto 0px;
`;

export const AbSingleDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AbTitle = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
`;

export const AbAnsw = styled(AbTitle)`
  font-weight: 400;
`;
