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

    getById("NAaOiKBukL").then((task) => {
      console.log(task);
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
            </span>
          </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MainList;
