import React from "react";
import "./App.css";
import Landing from "./pages/landing";
import ErrorBoundary from "./ErrorBoundary";
export const UserContext = React.createContext();
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from "./pages/home";
function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
