/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import colors from "../utils/colors";

const Contenedor = styled.div`
  height: 60vh;
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
const StyledLabel = styled.label`
  height: 1.6rem;
  width: 40%;
`;
const StyledInput = styled.input``;
const SendButton = styled.input``;
const StyledTextArea = styled.textarea``;

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
          <StyledLabel htmlFor='nombre'>Nombre</StyledLabel>
          <StyledInput type='text' name='user_name' />
        </Seccional>
        <Seccional>
          <StyledLabel htmlFor='email'>Correo</StyledLabel>
          <StyledInput type='email' name='user_email' />
        </Seccional>
        <Seccional>
          <StyledLabel htmlFor='message'>Mensaje</StyledLabel>
          <StyledTextArea name='message' />
        </Seccional>
        <SendButton type='submit' value='Send' />
      </ContactForm>
    </Contenedor>
  );
}
