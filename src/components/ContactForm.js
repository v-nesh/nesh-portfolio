import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const FormStyles = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray--1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type="submit"] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
  .err_message {
    display: inline-block;
    padding: 0.5rem;
    margin-top: 1rem;
    font-size: 1.5rem;
    color: red;
  }
  .success {
    margin-left: 2rem;
    color: white;
  }

  @media only screen and(max-width:768px) {
    .success {
      margin-left: 0;
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showErrMessage, setShowErrMessage] = useState("");
  const [showSuccMessage, setshowSuccMessage] = useState("");

  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      setShowErrMessage("");
      setshowSuccMessage("");
    }, 10000);
  });

  const sendEmail = (e) => {
    e.preventDefault();
    let reg = /[a-zA-z0-9_.].{5,20}/;
    if (reg.test(name) && reg.test(email)) {
      send(e);
    } else {
      setShowErrMessage("Name and Email should be more than 5 characters");
    }
  };

  const send = (e) => {
    emailjs
      .sendForm(
        "service_ixx1jvy",
        "template_bano2nl",
        form.current,
        "9ElHRZbkDGpl00cqo"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEmail("");
    setName("");
    setMessage("");
    setshowSuccMessage("Email send Successfully!");
  };

  return (
    <>
      <FormStyles>
        <form onSubmit={sendEmail} ref={form}>
          <div className="form-group">
            <label htmlFor="from_name">
              Your Name
              <input
                type="text"
                id="name"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <span className="err_message">{showErrMessage}</span>
          </div>
          <div className="form-group">
            <label htmlFor="from_email">
              Your Email
              <input
                type="text"
                id="email"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <span className="err_message">{showErrMessage}</span>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Your Message
              <textarea
                type="text"
                id="email"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Send</button>
          <span className="err_message success">{showSuccMessage}</span>
        </form>
      </FormStyles>
    </>
  );
}
