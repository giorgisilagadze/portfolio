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
  LinksDiv,
  CategoryDiv,
  SingleCategoryDiv,
} from "../styled-components/Portfolio.Styled";
import data from "../../data.json";
import { IconLinks } from "../styled-components/Contact.Styled";
import { useState } from "react";

export default function Portfolio() {
  const [category, setCategory] = useState<{
    screens: string[];
    projName: string[];
    link: { github: string; live: string }[];
  }>(data.projects[0]);
  const [checked, setChecked] = useState("all");

  return (
    <ParentAbout>
      <StyledAbout>
        <TitleDiv>
          <Title>PORTFOLIO</Title>
          <hr />
        </TitleDiv>
        <Learn>MY WORKS</Learn>
        <CategoryDiv>
          {data.projects.map((item) => (
            <SingleCategoryDiv
              bgc={
                item.title == checked
                  ? "rgb(24, 210, 110)"
                  : "rgba(255, 255, 255, 0.1)"
              }
              onClick={() => {
                setChecked(item.title);
                setCategory(item);
              }}
              key={Math.random()}
            >
              {item.title}
            </SingleCategoryDiv>
          ))}
        </CategoryDiv>

        {category?.screens.map((screen, index) => (
          <div key={Math.random()}>
            <ProjectCont
              key={Math.random()}
              bg={screen}
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ duration: 0.5 }}
            >
              <ProjectDiv
                initial={{ transform: "scale(0)", opacity: 0 }}
                // animate={{ transform: "scale(1)" }}
                transition={{ duration: 1 }}
                whileInView={{ transform: "scale(1)", opacity: 1 }}
              >
                <Frame />
                <MidDiv>
                  <ProjectName>{category.projName[index]}</ProjectName>
                  <LinksDiv>
                    <a href={category.link[index]?.github} target="_blank">
                      <IconLinks src="./images/links/github.png" alt="" />
                    </a>
                    <a href={category.link[index]?.live} target="_blank">
                      <IconLinks src="./images/link.png" alt="" />
                    </a>
                  </LinksDiv>
                </MidDiv>
                <FrameBott />
              </ProjectDiv>
            </ProjectCont>
          </div>
        ))}
      </StyledAbout>
    </ParentAbout>
  );
}
