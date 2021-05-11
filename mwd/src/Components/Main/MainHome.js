import React, { useEffect, useState } from "react";
import ProtectedRoute from "../Auth/ProtectedRoute";
import MainGood from "./MainGood";
import Parse from "parse";
import { verifyUser, logOutUser } from "../../Services/LearnServiceUser.js";

const MainHome = () => {
  const [flag, setFlag] = useState(false);
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
