import React from "react";
import { Header } from "../../components/Header";
import "./JournalPage.css";
export const JournalPage = () => {
  let currentPath = window.location.pathname;
  const promptsArr = [
    "I am grateful for...",
    "Daily affirmation",
    "Three things that happened today:",
    "How could I have made today better?",
    "Highlight and lowlight of the day",
    "What kind of person do you want to be next year?",
    "Describe your perfect morning.",
    "What fear can you overcome?",
  ];

  const randomNum = Math.floor(Math.random() * promptsArr.length);
  let random = promptsArr[randomNum];
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div id="journalPageDiv">
      <Header currentPath={currentPath} />
      <div id="centerJournalBox">
        <div id="journalOutline">.</div>
        <div id="journalTitle">
          <p>Journal</p>
        </div>
        <textarea placeholder={random} id="journalBox"></textarea>
        <button id="promptButton" onClick={() => handleRefresh()}>
          Generate prompt
        </button>
      </div>
      <div id="saveJournalButton">
        <button>Save</button>
      </div>
    </div>
  );
};
