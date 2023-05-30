import {
  StyledAbout,
  Title,
  TitleDiv,
  Learn,
} from "../styled-components/About.Styled";

export default function About() {
  return (
    <StyledAbout>
      <TitleDiv>
        <Title>ABOUT</Title>
        <hr />
      </TitleDiv>
      <Learn>Learn more about me</Learn>
    </StyledAbout>
  );
}
