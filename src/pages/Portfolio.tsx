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
                <ProjectCont
                  key={Math.random()}
                  bg={screen}
                  // initial={{ transform: "scale(0)" }}
                  // // animate={{ transform: "scale(1)" }}
                  // transition={{ duration: 4 }}
                  // whileInView={{ transform: "scale(1)" }}
                >
                  <ProjectDiv
                    initial={{ transform: "scale(0)" }}
                    // animate={{ transform: "scale(1)" }}
                    transition={{ duration: 4 }}
                    whileInView={{ transform: "scale(1)" }}
                  ></ProjectDiv>
                </ProjectCont>
              </div>
            ))}
          </div>
        ))}
      </StyledAbout>
    </ParentAbout>
  );
}
