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
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 30px;
  animation: top-about 0.5s ease-in;
  padding: 24px 30px;

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
