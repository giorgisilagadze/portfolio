import { useState } from "react";
import {
  Iconhamb,
  StyledHeader,
  Menu,
  Background,
  PageName,
  StyledLink,
} from "../styled-components/Header.Styled";
import { useLocation } from "react-router-dom";

interface Hooks {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

interface PageNames {
  name: string;
  link: string;
}

type arrOfPageNames = PageNames[];

const pages: arrOfPageNames = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Header({ setMenu, menu }: Hooks) {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <StyledHeader>
        <Iconhamb
          src={menu ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"}
          alt="hamburger"
          onClick={() => setMenu(!menu)}
        />
        <Background menu={menu} />
        {menu ? (
          <Menu menu={menu}>
            {pages.map((item) => (
              <StyledLink
                to={item.link}
                onClick={() => {
                  setMenu(!menu);
                }}
                key={Math.random()}
              >
                <PageName
                  opa={location.pathname == item.link ? "1" : "0.7"}
                  display={location.pathname == item.link ? "block" : "none"}
                >
                  {item.name}
                </PageName>
              </StyledLink>
            ))}
          </Menu>
        ) : null}
      </StyledHeader>
    </>
  );
}
