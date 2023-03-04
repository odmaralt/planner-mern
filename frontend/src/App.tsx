import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { LogInPage } from "./pages/LogInPage/LogInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { JournalPage } from "./pages/JournalPage/JournalPage";
import { ToDoPage } from "./pages/ToDoPage/ToDoPage";
import { LogsPage } from "./pages/LogsPage/LogsPage";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/signUp" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/to-do-list" element={<ToDoPage />} />
          <Route path="/logs" element={<LogsPage />} />
        </Routes>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
