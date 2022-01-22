import React from "react";
import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import Jello from "react-reveal/Jello";
import {
  StyledAll,
  StyledDiv,
  StyleField,
  StyleForm,
  StyledButton,
} from "./styles";
import "../../App.css";

const contactUrl = "http://3.231.167.185:4000/api/contact";

const initialValue = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const onSubmitButton = (formValues, action) => {
    // console.log(formValues, action);
    axios
      .post(contactUrl, {
        name: formValues.name,
        email: formValues.email,
        message: formValues.message,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data) {
          swal({
            title: "Sucesso!",
            icon: "success",
            text: "Mensagem enviada.",
            button: "OK",
          });
        }
      })
      .catch((error) => {
        // console.log(error);
      });
    action.resetForm();
  };

  return (
    <StyledAll id={"contact"}>
      <StyledDiv>
        <h2>CONTATO</h2>
        <div></div>
      </StyledDiv>
      <Jello>
        <p>
          Tem alguma dúvida ou está pensando em um projeto? <span>Vamos conversar!</span>
        </p>
        <ContactForm onSubmitButton={onSubmitButton} />
      </Jello>
    </StyledAll>
  );
}

const validateValue = (formValue) => {
  const error = {};

  if (!formValue.name) {
    error.name = "Nome é requirido!";
  }

  if (!formValue.email) {
    error.email = "Email é requirido";
  }

  if (!formValue.message) {
    error.message = "Mensagem é requirido";
  }
};

const validation = yup.object().shape({
  name: yup.string().required("input correct name!"),
  email: yup.string().required("input correct email!"),
  message: yup.string().required("please input letters!"),
});

function ContactForm({ onSubmitButton }) {
  // function onClickSubmit() {
  //   document.getElementById("buttonColor").style.background = "#04c2c9";
  // }

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validateValue}
        validationSchema={validation}
        onSubmit={onSubmitButton}
        render={(props) => {
          return (
            <StyleForm>
              <StyleField name="name" type="text" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
              <br />
              <StyleField
                name="email"
                type="email"
                row={3}
                placeholder="Email"
              />
              <ErrorMessage name="email" component="div" />
              <br />
              <StyleField
                name="message"
                type="text"
                component="textarea"
                rows={8}
                placeholder="Message"
              />
              <ErrorMessage name="message" component="div" />
              <br />
              <StyledButton type="submit" id="buttonColor">
                SUBMIT
              </StyledButton>
            </StyleForm>
          );
        }}
      />
    </div>
  );
}
