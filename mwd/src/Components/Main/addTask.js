/*import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";*/
import React from "react";

// import header
import { Header } from "../Elements/Header.js";
import Child from "./Child.js";

const axios = window.axios;
console.log("Reached addTask page");


function clickAlert() {
  alert("Task Submitted");
}

// commenting out axios for now //
function addTask() {
  return (
  <div>
    <Header title="New task">
      Please fill out the following:
    </Header>

    <form>
      <label for="taskTitle"> Title: </label>
      <input type="text" id="taskTitle" name="taskTitle" value="Enter task title"/>

      <label for="taskLocation"> Location: </label>
      <input type="text" id="taskLocation" name="taskLocation" value="Enter task location"/>

      <label> Date: </label>
      <input type="text" id="taskDate" name="taskDate" value="Enter task date"/>
      

      <label> Time: </label>
      <input type="text" id="taskTime" name="taskTime" value="Enter task time"/>

      <label> Frequency: </label>
      <input type="text" id="taskFrequency" name="taskFrequency" value="Enter task frequency"/>

      <Child data="Submit" onChildClick={clickAlert} />
    </form>
  </div>
}
export default addTask;
//render(html` <${addTask} /> `, document.getElementById("addTask"));