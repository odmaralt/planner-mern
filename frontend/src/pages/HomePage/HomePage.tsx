import "./HomePage.css";
import Plant from "../../components/Plant";
import { Checkbox } from "@mui/material";
import { Header } from "../../components/Header";
import React, { useEffect, useState } from "react";
const initialValues = {
  hoursSlept: "",
  minutesSlept: "",
  cupsDrank: "",
  cupsTotal: "8",
};
export const HomePage = () => {
  const [formValues, setFormValues] = useState<any>(initialValues);

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  let currentPath = window.location.pathname;
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    //sets form values
  };
  // console.log(formValues);
  return (
    <div id="homePageDiv">
      <Header currentPath={currentPath} />
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
        <h1 className="homeInput">
          <input
            onChange={handleInputChange}
            name="hoursSlept"
            placeholder="0"
          />{" "}
          Hr{" "}
          <input
            onChange={handleInputChange}
            name="minutesSlept"
            placeholder="0"
          />
          min
        </h1>
        <h3>save</h3>
      </div>
      <div id="coolBox">.</div>
      <div id="waterDiv">
        <p>WATER</p>{" "}
        <h1 className="homeInput">
          <input
            onChange={handleInputChange}
            name="cupsDrank"
            placeholder="0"
          />{" "}
          out of{" "}
          <input
            onChange={handleInputChange}
            name="cupsTotal"
            placeholder="8"
          />{" "}
        </h1>{" "}
        <h3>save</h3>
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
