import {
  StyledAbout,
  ParentAbout,
  TitleDiv,
  Title,
  Learn,
} from "../styled-components/About.Styled";
import { Project } from "../styled-components/Portfolio.Styled";
import data from "../../data.json";
import { useRef, useEffect } from "react";

export default function Portfolio() {
  const skillsRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(".animate-project:hover");
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
      <StyledAbout>
        <TitleDiv>
          <Title>PORTFOLIO</Title>
          <hr />
        </TitleDiv>
        <Learn>MY WORKS</Learn>
        {data.projects.map((item) => (
          <div key={Math.random()}>
            {item.screens.map((screen) => (
              <Project
                src={screen}
                alt=""
                ref={skillsRef}
                key={Math.random()}
              />
            ))}
          </div>
        ))}
      </StyledAbout>
    </ParentAbout>
  );
}
