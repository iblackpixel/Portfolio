/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import colors from "../utils/colors";

const Contenedor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75vh;
  color: ${colors.quinto};
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Seccional = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.input`
  height: 4vh;
  width: 50vw;
  margin: 2vh;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Lato;
  color: ${colors.cuarto};
`;
const SendButton = styled.input`
  background-color: transparent;
  text-decoration: none;
  font-size: 2vh;
  font-weight: light;
  font-family: Lato;
  margin: 2vh;
  border-style: solid;
  border-color: ${colors.terciario};
  margin: 0.4rem;
  border-radius: 0.5rem;
  color: ${colors.terciario};
  width: 25vw;
  height: 4vh;
  &:visited {
    color: ${colors.principal};
    text-decoration: none;
  }
  &:hover {
    color: ${colors.principal};
    text-decoration: none;
  }
  @media screen and (max-width: 660px) {
    width: 25vw;
  }
`;
const StyledTextArea = styled.textarea`
  height: 25vh;
  width: 50vw;
  margin: 2vh;
  font-size: 1.2rem;
  font-weight: bold;
  font-family: Lato;
`;

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6bqr6xm",
        "template_xozee8l",
        form.current,
        "uBcSwHmQoXFiI5bh7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Contenedor>
      <ContactForm ref={form} onSubmit={sendEmail}>
        <Seccional>
          <StyledInput type='text' name='user_name' placeholder='Nombre' />
        </Seccional>
        <Seccional>
          <StyledInput type='email' name='user_email' placeholder='Email' />
        </Seccional>
        <Seccional>
          <StyledTextArea name='message' placeholder='Mensaje' />
        </Seccional>
        <SendButton type='submit' value='Enviar' />
      </ContactForm>
    </Contenedor>
  );
}
