import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Iconhamb = styled.img`
  filter: invert(100%) sepia(3%) saturate(2%) hue-rotate(345deg)
    brightness(504%) contrast(100%);
  width: 20px;
  height: 20px;
`;

export const Menu = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  border: 2px solid grey;
  background-color: red;
  top: 60px;
  left: 24px;
  right: 48px;
`;
