import { useState } from "react";
import {
  StyledHome,
  Name,
  Hometxt,
  SpanProf,
  IconsDiv,
  Icon,
  CircleDiv,
} from "../styled-components/Home.Styled";

interface Icons {
  src: string;
  link: string;
}

type arrOfIcons = Icons[];

const icons: arrOfIcons = [
  {
    src: "./images/facebook.svg",
    link: "https://www.facebook.com/gio.silagadze.547",
  },
  {
    src: "./images/instagram.svg",
    link: "https://www.instagram.com/silagadze_giorgi/",
  },
];

interface Hooks {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

export default function Home({ menu, setMenu }: Hooks) {
  return (
    <StyledHome gap={menu ? "20px" : "50px"}>
      <div>
        <Name>Giorgi Silagadze</Name>
        <Hometxt>
          I'm a passionate <SpanProf>web developer</SpanProf> from Georgia
        </Hometxt>
      </div>
      <IconsDiv>
        {icons.map((item) => (
          <CircleDiv>
            <Icon src={item.src} />
          </CircleDiv>
        ))}
      </IconsDiv>
    </StyledHome>
  );
}
