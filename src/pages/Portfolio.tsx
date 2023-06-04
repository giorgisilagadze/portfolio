import {
  StyledAbout,
  ParentAbout,
  TitleDiv,
  Title,
  Learn,
} from "../styled-components/About.Styled";
import {
  Project,
  ProjectCont,
  ProjectDiv,
  Frame,
  FrameBott,
  MidDiv,
} from "../styled-components/Portfolio.Styled";
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
          <div key={Math.random()}>
            {item.screens.map((screen) => (
              <div>
                <ProjectCont key={Math.random()} bg={screen}>
                  <ProjectDiv
                    initial={{ transform: "scale(0)" }}
                    // animate={{ transform: "scale(1)" }}
                    transition={{ duration: 2 }}
                    whileInView={{ transform: "scale(1)" }}
                  >
                    <Frame />
                    <MidDiv></MidDiv>
                    <FrameBott />
                  </ProjectDiv>
                </ProjectCont>
              </div>
            ))}
          </div>
        ))}
      </StyledAbout>
    </ParentAbout>
  );
}
