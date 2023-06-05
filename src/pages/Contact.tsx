import {
  ParentAbout,
  StyledAbout,
  TitleDiv,
  Title,
  Learn,
} from "../styled-components/About.Styled";
import {
  IconCont,
  ContactDiv,
  IconDiv,
  TitleCont,
  InfoCont,
  IconLinks,
  LinksDiv,
  StyledInput,
  InputsDiv,
  Textar,
  ContactButt,
  ResultDiv,
  ResultP,
  Check,
  ResentP,
} from "../styled-components/Contact.Styled";
import data from "../../data.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import nodemailer from "nodemailer";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup
      .string()
      .required()
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/),
    subject: yup.string().required(),
    message: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function Contact() {
  const [sentMessage, setSentMessage] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    if (Object.keys(errors).length === 0) {
      setSentMessage(true);
      console.log(data);
    }
  };

  return (
    <ParentAbout>
      <StyledAbout>
        <TitleDiv>
          <Title>CONTACT</Title>
          <hr />
        </TitleDiv>
        <Learn>CONTACT ME</Learn>
        {data.contact.map((item, index) => (
          <ContactDiv key={Math.random()}>
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
          </ContactDiv>
        ))}
        {sentMessage ? (
          <ResultDiv>
            <Check src="./images/check2.png" alt="" />
            <ResultP>Your message has been sent</ResultP>
            <ResentP onClick={() => setSentMessage(false)}>
              Re-sent message
            </ResentP>
          </ResultDiv>
        ) : (
          <InputsDiv>
            <form onSubmit={handleSubmit(onSubmit)}>
              <StyledInput placeholder="Your Name" {...register("name")} />
              <StyledInput placeholder="Your Email" {...register("email")} />
              <StyledInput placeholder="Subject" {...register("subject")} />
              <Textar placeholder="Message" {...register("message")} />
              <ContactButt>Send Message</ContactButt>
            </form>
          </InputsDiv>
        )}
      </StyledAbout>
    </ParentAbout>
  );
}
