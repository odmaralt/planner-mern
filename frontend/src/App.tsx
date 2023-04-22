import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./App.css";
import { LogInPage } from "./pages/LogInPage/LogInPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { JournalPage } from "./pages/JournalPage/JournalPage";
import { ToDoPage } from "./pages/ToDoPage/ToDoPage";
import { LogsPage } from "./pages/LogsPage/LogsPage";
import { useUserProvider } from "./provider/UserProvider";

export function App() {
  const { user } = useUserProvider();

  return (
    <div>
      {" "}
      <BrowserRouter>
        <div>
          {" "}
          {user && (
            <Routes>
              <Route path="/home" element={<HomePage user={user} />} />
              <Route path="/journal" element={<JournalPage user={user} />} />
              <Route path="/to-do-list" element={<ToDoPage user={user} />} />
              <Route path="/logs" element={<LogsPage user={user} />} />
            </Routes>
          )}{" "}
          <Routes>
            <Route path="/" element={<LogInPage />} />
            <Route path="/signUp" element={<SignUpPage />} />
          </Routes>
        </div>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
