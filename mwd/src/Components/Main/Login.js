import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "./Form";
import { Header } from "../Elements/Header.js";
import { createUser, loginUser } from "../../Services/LearnServiceUser.js";
import Parse from "parse";
import auth from "../Auth/Auth.js";

export default function Login() {
  
  const history = useHistory();

  const [Username, setUsername] = useState();
  const [Password, setPassword] = useState();
  const [Email, setEmail] = useState();

  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  // Handler to track changes to the child input text
  const onUsernameChange = (e) => {
    e.preventDefault();
    // Continuously updating name to be added on submit
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    // Continuously updating name to be added on submit
    setPassword(e.target.value);
  };

  const onEmailChange = (e) => {
    e.preventDefault();
    // Continuously updating name to be added on submit
    setEmail(e.target.value);
  };

  const onLogInClick = (e) => {
    e.preventDefault();
    loginUser(Username, Password).then(()=> {
      // console.log("Checking from auth: ", check);
    console.log(Parse.User.current());
    history.push("/home");
    })
    
  }

  const onSignupClick = () => {
    createUser(Username, Password, Email);
    alert("Account was created!");
  }

  return (
    <section>
      <div class="centered">
        <h1 class="login">LOGIN</h1>
        <br />
        <form>
        <input type="text" id="username" name="username" placeholder="username" onChange={onUsernameChange}/>
        <br />
        <input type="password" id="password" name="password" placeholder="password" onChange={onPasswordChange}/> 
        <br /> <br />
        <button class="button2" onClick={onLogInClick}>LOGIN</button>
        </form>
        <button class="button3" onClick={togglePopup}>CREATE ACCOUNT</button>
      </div>
        {isOpen && <Form 
        content={<> 
        <div>
          <Header title="New Account">
            Please fill out the following:
          </Header>
          <input type="text" id="username" name="username" placeholder="username" onChange={onUsernameChange}/>
          <br />
          <input type="password" id="password" name="password" placeholder="password" onChange={onPasswordChange}/> 
          <br />
          <input type="text" id="email" name="email" placeholder="email" onChange={onEmailChange}/> 
          <br />
          <button class="button2" onClick={onSignupClick}>CREATE ACCOUNT<span class="plusIcon"></span></button>
        </div>
      </>}
      handleClose={togglePopup}
    />}
    </section>
  );
}
