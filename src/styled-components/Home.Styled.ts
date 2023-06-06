import styled from "styled-components";
import { motion } from "framer-motion";

interface Styles {
  gap?: string;
  z?: string;
  width?: string;
  height?: string;
}

export const StyledHome = styled(motion.div)<Styles>`
  /* @keyframes home {
    0% {
      margin-top: -300px;
    }

    100% {
      margin-top: 0px;
    }
  } */

  height: calc(100vh - 44px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  transition: 0.5s;
  margin-top: 0px;
  /* animation: home 0.5s; */
  overflow: hidden;
`;

export const Name = styled(motion.h1)`
  /* @keyframes font-size {
    0% {
      font-size: 20px;
    }

    100% {
      font-size: 30px;
    }
  } */

  font-weight: 700;
  font-size: 30px;
  line-height: 22px;
  color: white;
  text-align: center;
  /* animation: font-size 1s; */
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

export const CircleDiv = styled.div<Styles>`
  width: 40px;
  height: 40px;
  border: none;
  position: relative;
  border-radius: 50%;
  z-index: ${({ z }) => z};

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    opacity: 0.1;
  }

  &:hover {
    cursor: pointer;
    background-color: #18d26e;
    transition: 0.5s;
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
