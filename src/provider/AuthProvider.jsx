import React, { useState } from "react";
import AuthContext from "../services/AuthContext";

const AuthProvider = ({children}) => {
  

  const authInfo = {
    
  };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
