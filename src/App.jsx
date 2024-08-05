import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
import Landing from "./pages/landing";
export const UserContext = React.createContext();

function App() {
  let user = {
    printlog: () => {
      alert("hi");
    },
    name: "Ahmed",
  };

  return (
    <UserContext.Provider value={user}>
      <ErrorBoundary>
        <Landing />
      </ErrorBoundary>
    </UserContext.Provider>
  );
}

export default App;
