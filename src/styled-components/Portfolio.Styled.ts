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
  background-color: red;
  opacity: 0.1;
`;
