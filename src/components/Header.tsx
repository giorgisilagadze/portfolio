import {
  Iconhamb,
  StyledHeader,
  Menu,
} from "../styled-components/Header.Styled";

interface Hooks {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

export default function Header({ setMenu, menu }: Hooks) {
  return (
    <>
      <StyledHeader>
        <Iconhamb
          src={menu ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"}
          alt="hamburger"
          onClick={() => setMenu(!menu)}
        />
        {menu ? <Menu></Menu> : null}
      </StyledHeader>
    </>
  );
}
