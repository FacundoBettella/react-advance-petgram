import React, { useState, createContext } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem("jwt");
  });

  const value = {
    isAuth,
    activateAuth: (jwt) => {
      setIsAuth(true);
      window.sessionStorage.setItem("jwt", jwt);
    },
    removeAuth: function(){
      setIsAuth(false);
      window.sessionStorage.removeItem("jwt");
    }
  };

  /* Context.Provider value es un objeto con valores a los que puedo acceder desde sus children components  */
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default {
  Context,
  Provider,
  Consumer: Context.Consumer,
};
