import { Link } from "react-router-dom";
import styled from "styled-components";

interface Styles {
  menu?: boolean;
  opa?: string;
  display?: string;
}

export const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Iconhamb = styled.img`
  filter: invert(100%) sepia(3%) saturate(2%) hue-rotate(345deg)
    brightness(504%) contrast(100%);
  width: 20px;
  height: 20px;
  z-index: 103;
`;

export const Menu = styled.div<Styles>`
  @keyframes menu {
    0% {
      top: 80px;
    }
    100% {
      top: 64px;
    }
  }
  position: fixed;
  min-width: 327px;
  max-width: 768px;
  height: 700px;
  border: 2px solid #343535;
  top: 64px;
  left: 24px;
  right: 24px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  z-index: 102;
  animation: menu 0.5s;
  padding: 4px 24px 24px;
`;

export const Background = styled.div<Styles>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: ${({ menu }) => (menu ? 0.9 : 0)};
  transition: opacity 1s ease;
  z-index: 100;
`;

export const PageName = styled.p<Styles>`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: white;
  margin-top: 20px;
  opacity: ${({ opa }) => opa};

  &::after {
    content: "";
    display: ${({ display }) => display};
    width: 20px;
    border-bottom: 2px solid #18d26e;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
