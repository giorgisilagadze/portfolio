import styled from "styled-components";
import { CircleDiv } from "./Home.Styled";

export const ContactDIv = styled.div`
  padding: 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 20px;
`;

export const IconDiv = styled(CircleDiv)`
  z-index: 90;
  width: 52px;
  height: 52px;
`;

export const IconCont = styled.img`
  filter: invert(66%) sepia(76%) saturate(3285%) hue-rotate(104deg)
    brightness(106%) contrast(81%);
  position: absolute;
  top: 14px;
  left: 14px;
`;

export const TitleCont = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: white;
  opacity: 0.5;
`;

export const InfoCont = styled(TitleCont)`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  opacity: 1;
`;

export const IconLinks = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(91%) sepia(97%) saturate(0%) hue-rotate(54deg) brightness(300%)
    contrast(150%);
`;

export const LinksDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 10px 15px;
  border: none;
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);

  /* &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.1;
  } */
`;
