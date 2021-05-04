import React, { useEffect } from "react";
  
  export function Header({ title, children }) {
    useEffect(() => {
      document.title = title;
    }, [title]);
  
    return (
      <header>
        <h1>{title}</h1>
        <h3>{children}</h3>
      </header>
    );
  }
  