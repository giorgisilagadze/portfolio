import styled from "styled-components";
import { motion } from "framer-motion";

interface Styles {
  bg: string;
}

export const Project = styled(motion.img)`
  width: 100%;
  min-height: 236px;
  margin: 30px auto 0px;
  display: block;
  border-radius: 5px;
  position: relative;
`;

export const ProjectCont = styled(motion.div)<Styles>`
  width: 100%;
  min-height: 236px;
  height: fit-content;
  margin: 30px auto 0px;
  border-radius: 5px;
  background-image: url(${({ bg }) => bg});
  background-size: 100% 100%;
  position: relative;
`;

export const ProjectDiv = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Frame = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-top: 5px solid white;
  border-left: 5px solid white;
`;

export const FrameBott = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border-bottom: 5px solid white;
  border-right: 5px solid white;
`;

export const MidDiv = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: red;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
