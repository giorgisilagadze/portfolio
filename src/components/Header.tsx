import {
  Iconhamb,
  StyledHeader,
  Menu,
  Background,
  PageName,
  StyledLink,
  HeaderName,
  FixedHeader,
} from "../styled-components/Header.Styled";
import { useLocation } from "react-router-dom";
import { PagesDivHead } from "../styled-components/Home.Styled";
import { PageNameHome } from "../styled-components/Home.Styled";

interface Hooks {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

interface PageNames {
  name: string;
  link: string;
}

type arrOfPageNames = PageNames[];

export const pages: arrOfPageNames = [
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
      <FixedHeader>
        <StyledHeader
          just={location.pathname != "/" ? "space-between" : "flex-end"}
          bg={location.pathname != "/" ? "rgba(0, 0, 0, 0.7)" : ""}
        >
          {location.pathname != "/" ? (
            <HeaderName>Giorgi Silagadze</HeaderName>
          ) : null}
          <Iconhamb
            src={
              menu ? "./images/icon-close.svg" : "./images/icon-hamburger.svg"
            }
            alt="hamburger"
            onClick={() => setMenu(!menu)}
          />
          {location.pathname != "/" ? (
            <PagesDivHead>
              {pages.map((item) => (
                <StyledLink to={item.link} key={Math.random()}>
                  <PageNameHome
                    opa={location.pathname == item.link ? "1" : "0.7"}
                    display={location.pathname == item.link ? "block" : "none"}
                  >
                    {item.name}
                  </PageNameHome>
                </StyledLink>
              ))}
            </PagesDivHead>
          ) : null}

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
      </FixedHeader>
    </>
  );
}
