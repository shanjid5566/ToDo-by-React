import React, { useEffect, useState } from "react";
import ThemeContext from "../services/ThemeContext";

const ThemeProvider = ({children}) => {
  const [dark, setDark] = useState(false);

  useEffect(()=>{
    if(dark){
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
  },[dark])
  const themeInfo = {
    dark,setDark
  }
  return <ThemeContext.Provider value={themeInfo}>
    {children}
  </ThemeContext.Provider>;
};

export default ThemeProvider;
