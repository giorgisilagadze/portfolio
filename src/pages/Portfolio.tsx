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
  ProjectName,
  LinksDiv
} from "../styled-components/Portfolio.Styled";
import data from "../../data.json";
import { IconLinks } from "../styled-components/Contact.Styled";

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
            {item.screens.map((screen, index) => (
              <div>
                <ProjectCont key={Math.random()} bg={screen}>
                  <ProjectDiv
                    initial={{ transform: "scale(0)", opacity: 0 }}
                    // animate={{ transform: "scale(1)" }}
                    transition={{ duration: 1 }}
                    whileInView={{ transform: "scale(1)", opacity: 1 }}
                  >
                    <Frame />
                    <MidDiv>
                      <ProjectName>{item.projName[index]}</ProjectName>
                      <LinksDiv>
                      <a href={item.link[index]?.github} target="_blank"><IconLinks src="./images/links/github.png" alt="" /></a>
                      <a href={item.link[index]?.live} target="_blank"><IconLinks src="./images/link.png" alt="" /></a> 
                      </LinksDiv>
                    </MidDiv>
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
