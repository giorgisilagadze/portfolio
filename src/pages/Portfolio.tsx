import {
  StyledAbout,
  ParentAbout,
  TitleDiv,
  Title,
  Learn,
} from "../styled-components/About.Styled";
import { Project } from "../styled-components/Portfolio.Styled";
import data from "../../data.json";

export default function Portfolio() {
  return (
    <ParentAbout>
      <StyledAbout>
        <TitleDiv>
          <Title>PORTFOLIO</Title>
          <hr />
        </TitleDiv>
        <Learn>MY WORKS</Learn>
        {data.projects.map((item) => (
          <div>
            {item.screens.map((screen) => (
              <Project src={screen} alt="" />
            ))}
          </div>
        ))}
      </StyledAbout>
    </ParentAbout>
  );
}
