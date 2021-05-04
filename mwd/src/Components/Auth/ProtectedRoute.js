import React from "react";
import { Redirect, useHistory } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  //const history = useHistory();
  
  console.log(rest); // show rest.path in the console
  console.log("Flag in protected route", flag);
  // you could redirect back to /auth if the flag is not true
  return (
    <div>
      {flag ? (
        <Redirect to={"/home"} />
      ) : (
        <Redirect to={"/login"} />
      )}
    </div>
  );
};

export default ProtectedRoute;
