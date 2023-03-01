import "./HomePage.css";
import Plant from "../../components/Plant";
import { Checkbox } from "@mui/material";
import { Header } from "../../components/Header";
import React, { useEffect, useState } from "react";
export const HomePage = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div id="homePageDiv">
      <Header />
      <div id="dateDiv">
        <p>Today</p>

        <p>
          {dateState.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
        <h1>
          {dateState.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </h1>
      </div>
      <div id="sleepDiv">
        <p>SLEEP</p>
        <h1>0 Hr 0 min</h1>
      </div>
      <div id="coolBox">.</div>
      <div id="waterDiv">
        <p>WATER</p> <h1>0 cups out of 8</h1>
      </div>{" "}
      <div id="coolBox2">.</div>
      <div id="toDoDiv">
        <h1>To-do List</h1>
        <div className="checkbox">
          <Checkbox
            sx={{ color: "#8a8d7f", "& .MuiSvgIcon-root": { fontSize: 16 } }}
          />
          <p>Study</p>
        </div>
        <div className="checkbox">
          <Checkbox
            sx={{ color: "#8a8d7f", "& .MuiSvgIcon-root": { fontSize: 16 } }}
          />
          <p>Eat</p>
        </div>
        <div className="checkbox">
          <Checkbox
            sx={{ color: "#8a8d7f", "& .MuiSvgIcon-root": { fontSize: 16 } }}
          />
          <p>Clean</p>
        </div>
        <Plant />
      </div>
    </div>
  );
};
