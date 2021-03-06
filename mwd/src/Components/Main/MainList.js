import React, { useEffect, useState } from "react";
import { getAllTasks, getById, removeTask } from "../../Services/LearnService.js";

const MainList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState([]);

  // UseEffect to run when the page loads to
  // obtain async data and render
  
  useEffect(() => {
    getAllTasks().then((tasks) => {
      setTasks(tasks);
    });

    getById("ZAHiDmeYB3").then((task) => {
      console.log("THIS IS A TEST:", task.get("image")["_url"]);
      setTask(task);
    });
  }, []);

  // Flags in the state to watch for add/remove updates
  const [remove, setRemove] = useState("");
  
  useEffect(() => {
    
    // Check if remove state variable is holding an ID
    if (remove.length > 0) {
      //Filter the old lessons list to take out selected lesson
      const newTasks = tasks.filter((task) => task.id !== remove);
      setTasks(newTasks);

      removeTask(remove).then(() => {
        console.log("Removed task with ID: ", remove);
      });
      // Reset remove state variable
      setRemove("");
    }
    //console.log("Image to be displayed", tasks[0].get("image"))
  }, [tasks, remove]);


  return (
    <div>
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <div class="align">
             <span>
               <button class="button" onClick={(e) => {
                  setRemove(task.id);
                }}
              ><span class="checkmark"></span>
             </button>
            <li key={task.id} class="test"> 
              {task.get("name")} | {task.get("location")} | {task.get("time")}
            </li>{" "}
            <img src={task.get("image")["_url"]} width="100" height="70"/>
            </span>
          </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainList;
