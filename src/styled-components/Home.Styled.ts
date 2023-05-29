import styled from "styled-components";

interface Styles {
  gap: string;
}

export const StyledHome = styled.div<Styles>`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  transition: 0.5s;
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 22px;
  color: white;
  text-align: center;
`;

export const Hometxt = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  margin-top: 20px;
`;

export const SpanProf = styled.span`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  color: white;
  border-bottom: 2px solid #18d26e;
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const CircleDiv = styled.div`
  width: 40px;
  height: 40px;
  border: none;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    opacity: 0.1;
  }
`;

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  filter: invert(91%) sepia(97%) saturate(0%) hue-rotate(54deg) brightness(300%)
    contrast(150%);
  position: absolute;
  top: 12.5px;
  left: 12.5px;
  z-index: 99;
`;
