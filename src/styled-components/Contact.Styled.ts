import styled from "styled-components";
import { CircleDiv } from "./Home.Styled";
import { CVButt } from "./About.Styled";

export const ContactDiv = styled.div`
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
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: white;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export const InputsDiv = styled(ContactDiv)`
  padding: 10px 30px 30px;
  display: block;
`;

export const Textar = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-width: 100%;
  min-height: 130px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 12px 15px;
  margin-top: 20px;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: white;
  border-radius: 3px;

  &:focus {
    outline: none;
  }
`;

export const ContactButt = styled(CVButt)`
  margin-top: 30px;
`;

export const ResultDiv = styled(ContactDiv)`
  height: 300px;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`;

export const ResultP = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: white;
  text-align: center;
`;
