import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = (props: any) => {
  // const { headerColor } = props;

  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/home");
  };
  const handleSignOutClick = () => {
    navigate("/");
  };
  const handleJournalClick = () => {
    navigate("/journal");
  };
  return (
    <div id="headerDiv">
      <p
        id="logo"
        onClick={() => {
          handleLogoClick();
        }}
      >
        DailyPlanner
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
        <p>To-do</p>
        <p>Logs</p>
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
