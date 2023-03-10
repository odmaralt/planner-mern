import React from "react";
import { Header } from "../../components/Header";
import "./LogsPage.css";
export const LogsPage = () => {
  let currentPath = window.location.pathname;

  return (
    <div id="logsPageDiv">
      <Header currentPath={currentPath} />

      <table id="logsTitleDiv">
        <tr>
          <td>Date</td>
          <td>Sleep</td>
          <td>Water</td>
          <td className="journal">Journal</td>
        </tr>
        <tr>
          <td>1/1/2023</td>
          <td>8hr0min</td>
          <td>8cups</td>
          <td className="journal">today i went on a walk, ate, relaxed and</td>
        </tr>{" "}
        <tr>
          <td>1/1/2023</td>
          <td>8hr0min</td>
          <td>8cups</td>
          <td className="journal">today i went on a walk, ate, relaxed and</td>
        </tr>{" "}
        <tr>
          <td>1/1/2023</td>
          <td>8hr0min</td>
          <td>8cups</td>
          <td className="journal">today i went on a walk, ate, relaxed and</td>
        </tr>{" "}
        <tr>
          <td>1/1/2023</td>
          <td>8hr0min</td>
          <td>8cups</td>
          <td className="journal">today i went on a walk, ate, relaxed and</td>
        </tr>{" "}
        <tr>
          <td>1/1/2023</td>
          <td>8hr0min</td>
          <td>8cups</td>
          <td className="journal">today i went on a walk, ate, relaxed and</td>
        </tr>{" "}
        <tr>
          <td>1/1/2023</td>
          <td>8hr0min</td>
          <td>8cups</td>
          <td className="journal">today i went on a walk, ate, relaxed and</td>
        </tr>
      </table>
    </div>
  );
};
