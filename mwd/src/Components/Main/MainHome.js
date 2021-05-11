import React, { useEffect, useState } from "react";
import ProtectedRoute from "../Auth/ProtectedRoute";
import MainGood from "./MainGood";
import Parse from "parse";
import { verifyUser, logOutUser } from "../../Services/LearnServiceUser.js";

const MainHome = () => {
  const [flag, setFlag] = useState(false);
  //var Username = document.getElementById("username").value;
  
 // var Password = document.getElementById("password").value;
  //console.log("Username: ", Username);
  //console.log("Password: ", Password);

  // I THINK THIS IS WHERE WE CHECK IF USER EXISTS
  //var checked = verifyUser();
  
  //var checked = loginUser(Username, Password);
  //console.log(checked);
  //console.log("Check: ", checked);
  //console.log("Check2: ", Boolean(checked));
  const check = verifyUser();

  useEffect(() => {
    console.log("Verify User before", verifyUser());
    console.log("Check in useEffect:", check);
    if (check) {
      console.log("User Verified!");
      console.log(Parse.User.current());
      setFlag(check);
      console.log("flag should have just been set to be true, flag is actually:", flag);
    } else {
      console.log("User Not Verified!");
      setFlag(false);
    }
  }, [check]);

  //var currentUser = Parse.User.current().getUsername();
  //console.log("Current User =", currentUser);
  var good = false;
  if (Parse.User.current() === null){
    good = false;
    console.log("User does not exist");
    } else {
      good = true;
      console.log(Parse.User.current().getUsername(), "user logged in");  
  }

  logOutUser();
    // console.log("Flag:", flag);

  // State variable that will hold username value
  // const [username, setUsername] = useState('');
  // useEffect(() => {
  //     if (username === '') {
  //         setUsername(getCurrentUser);
  //     }
  //   }
  // , [username]);
  // console.log("USERNAME IS: ", username);



  // PUT IN TEMPORARILY FOR TESTING PURPOSES
  //setFlag(true);

  // In this case the flag is acquired through a check box but it could also be received from other methods
  // What is a Parse.User method that would help here?

  return (
    <div>
      <ProtectedRoute
        exact
        path="/user"
        flag={good}
        component={MainGood}
      />
    </div>
  );
};

export default MainHome;
