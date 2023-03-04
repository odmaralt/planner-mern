import React from "react";
import { Header } from "../../components/Header";
import "./LogsPage.css";
export const LogsPage = () => {
  let currentPath = window.location.pathname;

  return (
    <div id="logsPageDiv">
      <Header currentPath={currentPath} />
      <div id="logsTitleDiv">
        <p>Date</p> <p>Sleep</p> <p>Water</p> <p id="journalText">Journal</p>
      </div>
      <div id="logsDiv">
        <div>
          <p>1/1/2022</p>
          <p>8hr0min</p>
          <h2>6 cups</h2>
          <h1>
            today i went on a walk, ate, relaxed and i did other stuff and i
            stuff and i stuff and i stuff and i
          </h1>
        </div>{" "}
        <div>
          <p>1/1/2022</p>
          <p>8hr0min</p>
          <h2>6 cups</h2>
          <h1>
            today i went on a walk, ate, relaxed and i did other stuff and i
            stuff and i stuff and i stuff and i
          </h1>
        </div>{" "}
        <div>
          <p>1/1/2022</p>
          <p>8hr0min</p>
          <h2>6 cups</h2>
          <h1>
            today i went on a walk, ate, relaxed and i did other stuff and i
            stuff and i stuff and i stuff and i
          </h1>
        </div>{" "}
        <div>
          <p>1/1/2022</p>
          <p>8hr0min</p>
          <h2>6 cups</h2>
          <h1>
            today i went on a walk, ate, relaxed and i did other stuff and i
            stuff and i stuff and i stuff and i
          </h1>
        </div>{" "}
        <div>
          <p>1/1/2022</p>
          <p>8hr0min</p>
          <h2>6 cups</h2>
          <h1>
            today i went on a walk, ate, relaxed and i did other stuff and i
            stuff and i stuff and i stuff and i
          </h1>
        </div>
      </div>
    </div>
  );
};
