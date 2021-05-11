import React, { useEffect, useState } from "react";
import { getGreeting } from "./generateGreeting.js";
import Child from "./Child.js";
import Form from "./Form";
//import Username from "./Login.js";
import "../../styles/index.css";
import { Header } from "../Elements/Header.js";
import { createTask, getAllTasks, removeTask } from "../../Services/LearnService.js";
import { getCurrentUser } from "../../Services/LearnServiceUser.js";
//import {View, Button, Image, StyleSheet} from  'react-native';
//import {launchImageLibrary} from  'react-native-image-picker';
// import header

const MainHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [dateOf, setDate] = useState();
    const [time, setTime] = useState();
    const [frequency, setFrequency] = useState();
    const [image, setImage] = useState();

    const [add, setAdd] = useState(false);
    const [tasks, setTasks] = useState([]);
    //const [task, setTask] = useState([]);
    const [remove, setRemove] = useState("");

    useEffect(() => {
      getAllTasks().then((tasks) => {
        setTasks(tasks);
      });
  
      /*getById("NAaOiKBukL").then((task) => {
        setTask(task);
      });*/
    }, []);

    var date = new Date().toLocaleDateString();
    var greeting = getGreeting();

    useEffect(() => {
      // Check for add flag and make sure name state variable is defined
    if (name && add) {
      createTask(name, location, dateOf, time, frequency, image).then((newTask) => {
        setAdd(false);
        // Add the newly created lesson to the lessons array
        // to render the new list of lessons (thru spread/concatination)
        setTasks([...tasks, newTask]);
      });
  }
// Check if remove state variable is holding an ID
if (remove.length > 0) {
  //Filter the old lessons list to take out selected lesson
  const newTasks = tasks.filter((task) => task.id !== remove);
  setTasks(newTasks);

  removeTask(remove).then(() => {
    console.log("Removed lesson with ID: ", remove);
  });
  // Reset remove state variable
  setRemove("");
}
}, [name, tasks, add, remove]);


// Handler to handle event passed from child submit button
  const onClickHandler = (e) => {
    e.preventDefault();
    // Trigger add flag to create lesson and
    // re-render list with new lesson
    
    setAdd(true);
    alert("Task Submitted");
  };

      // Handler to track changes to the child input text
      const onNameChange = (e) => {
        e.preventDefault();
        // Continuously updating name to be added on submit
        setName(e.target.value);
      };
      
      // Handler to track changes to the child input text
      const onLocationChange = (e) => {
        e.preventDefault();
        // Continuously updating name to be added on submit
        setLocation(e.target.value);
      };
      
      // Handler to track changes to the child input text
      const onDateChange = (e) => {
        e.preventDefault();
        // Continuously updating name to be added on submit
        setDate(e.target.value);
      };
      
      // Handler to track changes to the child input text
      const onTimeChange = (e) => {
        e.preventDefault();
        // Continuously updating name to be added on submit
        setTime(e.target.value);
      };
      // Handler to track changes to the child input text
      const onFrequencyChange = (e) => {
        e.preventDefault();
        // Continuously updating name to be added on submit
        setFrequency(e.target.value);
      };

      // State variable that will hold username value
      const [username, setUsername] = useState('');
      useEffect(() => {
          if (username === '') {
              setUsername(getCurrentUser);
          }
        }
      , [username]);
      console.log("USERNAME IS: ", username);

      const fileSelectedHandler = event => {
        setImage(event.target.files[0])
        console.log(event.target.files[0]);
      }

  return (
    <div>
      <div>
        <h1>{greeting}, {username}!</h1>
        <h2>{date}</h2>
      </div>
      <div class="topcorner">
        <button class="button" onClick={togglePopup}><span class="plusIcon"></span></button>
      </div>
      {isOpen && <Form 
        content={<> 
        <div>
    <Header title="New task">
      Please fill out the following:
    </Header>

    <form>
      <label for="taskTitle"> Title: </label>
      <input type="text" id="taskTitle" name="taskTitle" placeholder="Sign Declaration of Independence" required="" onChange={onNameChange}/>

      <label for="taskLocation"> Location: </label>
      <input type="text" id="taskLocation" name="taskLocation" placeholder="Philadelphia" onChange={onLocationChange}/>

      <label> Date: </label>
      <input type="text" id="taskDate" name="taskDate" placeholder="July, 4th 1776" required="" onChange={onDateChange}/>

      <label> Time: </label>
      <input type="text" id="taskTime" name="taskTime" placeholder="All Day" onChange={onTimeChange}/>

      <label> Frequency: </label>
      <input type="text" id="taskFrequency" name="taskFrequency" placeholder="Once" onChange={onFrequencyChange}/>

      <label> Image: </label>
      <input type="file" onChange={fileSelectedHandler}></input>

      <br/><br />
      <Child data="Submit" onChildClick={onClickHandler}/>
    </form>
  </div>
      </>}
      handleClose={togglePopup}
    />}
    </div>
  );
};
export default MainHeader;
