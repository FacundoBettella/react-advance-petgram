import React, { useState, createContext } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
  };

  /* Context.Provider value es un objeto con valores a los que puedo acceder desde sus children components  */
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
};

export default {
    Provider,
    Consumer: Context.Consumer,
}
