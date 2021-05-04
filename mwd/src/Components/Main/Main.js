import MainList from "./MainList";
import MainHeader from "./MainHeader";
import React, { useEffect, useState } from "react";
import Auth from "./Login.js";

const MainModule = () => {

  return (
    
    <div>
      <Auth />
      <MainHeader />
      <MainList />
    </div>
  );
};

export default MainModule;