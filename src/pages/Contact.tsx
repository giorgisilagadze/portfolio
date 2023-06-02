import {
  ParentAbout,
  StyledAbout,
  TitleDiv,
  Title,
  Learn,
} from "../styled-components/About.Styled";
import {
  IconCont,
  ContactDIv,
  IconDiv,
  TitleCont,
  InfoCont,
  IconLinks,
  LinksDiv,
  StyledInput,
} from "../styled-components/Contact.Styled";
import data from "../../data.json";

export default function Contact() {
  return (
    <ParentAbout>
      <StyledAbout>
        <TitleDiv>
          <Title>CONTACT</Title>
          <hr />
        </TitleDiv>
        <Learn>CONTACT ME</Learn>
        {data.contact.map((item, index) => (
          <ContactDIv key={Math.random()}>
            <IconDiv>
              <IconCont src={item.icon} />
            </IconDiv>
            <div>
              <TitleCont>{item.title}</TitleCont>
              <LinksDiv>
                {item.info.map((cont, i) =>
                  index == 0 ? (
                    <a href={item.link[i]} key={Math.random()} target="_blank">
                      <IconLinks src={cont} key={Math.random()} />
                    </a>
                  ) : (
                    <InfoCont key={Math.random()}>{cont}</InfoCont>
                  )
                )}
              </LinksDiv>
            </div>
          </ContactDIv>
        ))}
        <ContactDIv>
          <StyledInput />
        </ContactDIv>
      </StyledAbout>
    </ParentAbout>
  );
}
