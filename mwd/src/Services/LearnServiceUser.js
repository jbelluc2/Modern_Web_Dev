import Parse from "parse";

export function loginUser(username, password){
    return Parse.User.logIn(username, password).then((loggedInUser) => {
        //if (typeof document !== 'undefined') document.write(`Logged in user: ${JSON.stringify(user)}`);
        // alert(
        //   `User ${loggedInUser.getUsername()} has successfully signed in!`,
        // );
        // const currentUser = await Parse.User.current();
        // console.log(loggedInUser === currentUser);
        //console.log('Valid is set to true');
        //valid = true;
        //return true;
      }).catch((error) => {
        //if (typeof document !== 'undefined') document.write(`Error while logging in user: ${JSON.stringify(error)}`);
        console.error('Error while logging in user', error);
        //console.log('Valid is set to false');
        //valid = false;
        // alert(`${error.message}`);
        //return false;
      });
}

export const getCurrentUser = () => {
  var currentUser = Parse.User.current();
    if (currentUser !== null) {
      return currentUser.getUsername();
    }
    return false;
}

export const logOutUser = () => {
  Parse.User.logOut();
  console.log("Logged Out!");
}

export const verifyUser = () => {
    var user = Parse.User.current();
    if (user === null){
        return false;
    }
    console.log("Current", user);
    console.log("Current user:", user.getUsername());
    var temp = user.authenticated();
    console.log("User is authenticated:", temp);
    return user.authenticated();
}

export const createUser = (username, password, email) => {
    const user = new Parse.User()
    user.set('username', username);
    user.set('email', email);
    user.set('password', password);

    user.signUp().then((user) => {
    //if (typeof document !== 'undefined') document.write(`User signed up: ${JSON.stringify(user)}`);
    console.log('User signed up', user);
    }).catch(error => {
    //if (typeof document !== 'undefined') document.write(`Error while signing up user: ${JSON.stringify(error)}`);
    console.error('Error while signing up user', error);
    });
}