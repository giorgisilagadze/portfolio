import {
  StyledHome,
  Name,
  Hometxt,
  SpanProf,
  IconsDiv,
  Icon,
  CircleDiv,
} from "../styled-components/Home.Styled";
import { Link } from "react-router-dom";

interface Icons {
  src: string;
  link: string;
}

type arrOfIcons = Icons[];

const icons: arrOfIcons = [
  {
    src: "./images/links/facebook.svg",
    link: "https://www.facebook.com/gio.silagadze.547",
  },
  {
    src: "./images/links/instagram.svg",
    link: "https://www.instagram.com/silagadze_giorgi/",
  },
  {
    src: "./images/links/linkedin2.png",
    link: "https://www.linkedin.com/in/giorgi-silagadze-3bb522257/",
  },
  {
    src: "./images/links/github.png",
    link: "https://github.com/giorgisilagadze",
  },
];

interface Hooks {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

export default function Home({ menu }: Hooks) {
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
          <Link to={item.link} key={Math.random()} target="_blank">
            <CircleDiv z={menu ? "98" : "101"}>
              <Icon src={item.src} />
            </CircleDiv>
          </Link>
        ))}
      </IconsDiv>
    </StyledHome>
  );
}
