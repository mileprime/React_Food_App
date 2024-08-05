import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
        <Landing />
      </ErrorBoundary>
    </UserContext.Provider>
  );
}

export default App;
