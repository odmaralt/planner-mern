import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { LogInPage } from "./pages/LogInPage/LogInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { JournalPage } from "./pages/JournalPage/JournalPage";

export function App() {
  return (
    <div>
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />{" "}
          <Route path="/home" element={<HomePage />} />{" "}
          <Route path="/journal" element={<JournalPage />} />{" "}
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
