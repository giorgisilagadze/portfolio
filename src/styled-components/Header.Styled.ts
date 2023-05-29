import styled from "styled-components";

interface Styles {
  menu: boolean;
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
  z-index: 102;
`;

export const Menu = styled.div<Styles>`
  position: fixed;
  min-width: 327px;
  max-width: 768px;
  height: 100%;
  border: 2px solid grey;
  top: ${({ menu }) => (menu ? "64px" : "0px")};
  left: 24px;
  right: 24px;
  bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  z-index: 101;
  transition: top 0.3s ease;
  transition-delay: 0.3s;
  padding: 24px;
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
