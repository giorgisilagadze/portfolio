import {
  StyledAbout,
  Title,
  TitleDiv,
  Learn,
  ProfilePict,
  Prof,
  Arrow,
  AbDiv,
  AbSingleDiv,
  AbTitle,
  AbAnsw,
  ParentAbout,
  AbTxt,
  SkillsDiv,
  SingleSkillDiv,
  SkillIcon,
  CV,
  CVButt,
  Download,
  SkillsParent,
} from "../styled-components/About.Styled";
import data from "../../data.json";
import { useEffect, useRef } from "react";

export default function About() {
  const skillsRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-skills");
        }
      });
    });

    observer.observe(skillsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <ParentAbout>
      <StyledAbout
        initial={{ marginTop: "164px", opacity: 0.1 }}
        animate={{ marginTop: "94px", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <TitleDiv>
          <Title>ABOUT</Title>
          <hr />
        </TitleDiv>
        <Learn>Learn more about me</Learn>
        <ProfilePict src="./images/profile-copy.jpeg" />
        <Prof>Software Engineer</Prof>
        <AbDiv>
          {data.about.map((item) => (
            <AbSingleDiv key={Math.random()}>
              <Arrow src="./images/arrow.png" alt="" />
              <AbTitle>{item.first}</AbTitle>
              <AbAnsw>{item.second}</AbAnsw>
            </AbSingleDiv>
          ))}
        </AbDiv>
        <AbTxt>{data["about-text"].sum}</AbTxt>
        <SkillsParent ref={skillsRef}>
          <SkillsDiv>
            <TitleDiv>
              <Title>SKILLS</Title>
              <hr />
            </TitleDiv>
            {data.skills.map((item) => (
              <SingleSkillDiv key={Math.random()}>
                <SkillIcon src={item.src} alt="skill-icon" />
                <AbTitle>{item.skill}</AbTitle>
              </SingleSkillDiv>
            ))}
          </SkillsDiv>
        </SkillsParent>
        <CV href="../../CV.pdf" download>
          <CVButt>
            Download CV
            <Download src="./images/download.png" alt="download" />
          </CVButt>
        </CV>
      </StyledAbout>
    </ParentAbout>
  );
}
