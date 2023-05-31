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
} from "../styled-components/About.Styled";
import data from "../../data.json";

console.log(data);

export default function About() {
  return (
    <StyledAbout>
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
    </StyledAbout>
  );
}
