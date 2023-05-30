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
    src: "./images/facebook.svg",
    link: "https://www.facebook.com/gio.silagadze.547",
  },
  {
    src: "./images/instagram.svg",
    link: "https://www.instagram.com/silagadze_giorgi/",
  },
  {
    src: "./images/linkedin.svg",
    link: "https://www.linkedin.com/in/giorgi-silagadze-3bb522257/",
  },
  {
    src: "./images/github.svg",
    link: "https://github.com/giorgisilagadze",
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
        {icons.map((item, index) => (
          <Link to={item.link} key={Math.random()} target="_blank">
            <CircleDiv z={menu ? "99" : "101"}>
              <Icon src={item.src} />
            </CircleDiv>
          </Link>
        ))}
      </IconsDiv>
    </StyledHome>
  );
}
