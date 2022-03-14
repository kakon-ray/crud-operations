import React, { useState, createContext } from "react";

export const userContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Kakon Ray",
      position: "Front End Developer",
      salary: 28000,
    },
    {
      id: 2,
      name: "Junaid Ahmed",
      position: "Front End Developer",
      salary: 26000,
    },
    {
      id: 3,
      name: "Ariful Islam Sir",
      position: "Full Stack Developer",
      salary: 27000,
    },
  ]);

  return (
    <userContext.Provider value={[users, setUsers]}>
      {props.children}
    </userContext.Provider>
  );
};
