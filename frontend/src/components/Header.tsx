import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = (props: any) => {
  const { currentPath } = props;
  const homePage = currentPath === "/home";
  const journalPage = currentPath === "/journal";
  const toDoPage = currentPath === "/to-do-list";

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };
  const handleLogsClick = () => {
    navigate("/logs");
  };
  const handleSignOutClick = () => {
    navigate("/");
  };
  const handleJournalClick = () => {
    navigate("/journal");
  };
  const handleToDoClick = () => {
    navigate("/to-do-list");
  };
  return (
    <div
      style={{
        color: homePage
          ? "#9a9e8c"
          : journalPage
          ? "#A79B8A"
          : toDoPage
          ? "rgb(160, 148, 131)"
          : "#fff5e6",
      }}
      id="headerDiv"
    >
      <p
        id="logo"
        onClick={() => {
          handleLogoClick();
        }}
      >
        Plannify
      </p>
      <div id="headerRight">
        <p
          className="pointer"
          onClick={() => {
            handleJournalClick();
          }}
        >
          Journal
        </p>
        <p
          className="pointer"
          onClick={() => {
            handleToDoClick();
          }}
        >
          To-do
        </p>
        <p
          className="pointer"
          onClick={() => {
            handleLogsClick();
          }}
        >
          Logs
        </p>
        <p
          className="pointer"
          onClick={() => {
            handleSignOutClick();
          }}
        >
          Sign Out
        </p>
      </div>
    </div>
  );
};
