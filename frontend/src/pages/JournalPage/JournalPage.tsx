import React from "react";
import { Header } from "../../components/Header";
import "./JournalPage.css";
export const JournalPage = () => {
  let currentPath = window.location.pathname;
  return (
    <div id="journalPageDiv">
      <Header currentPath={currentPath} />
      <div id="centerJournalBox">
        <div id="journalOutline">.</div>
        <div id="journalTitle">
          <p>Journal</p>
        </div>
        <textarea id="journalBox"></textarea>
      </div>
      <div id="saveJournalButton">
        <button>Save</button>
      </div>
    </div>
  );
};
