import React from "react";
import { Header } from "../../components/Header";
import "./JournalPage.css";
export const JournalPage = () => {
  return (
    <div id="journalPageDiv">
      <Header />
      <div id="centerJournalBox">
        <div id="journalOutline">.</div>
        <div id="journalTitle">
          <p>Journal</p>
        </div>
        <textarea id="journalBox"></textarea>
      </div>
    </div>
  );
};
