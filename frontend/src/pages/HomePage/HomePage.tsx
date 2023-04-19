import "./HomePage.css";
import { grey } from "@mui/material/colors";

import Plant from "../../components/Plant";
import { Alert, Checkbox, FormControlLabel } from "@mui/material";
import { Header } from "../../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
interface Task {
  task: string;
  _id: string;
  checked: boolean;
}
interface Water {
  cupsDrank: string;
  cupsTotal: string;
  _id: string;
}
interface Sleep {
  hoursSlept: string;
  minutesSlept: string;
  _id: string;
}
const fetchTasks = async () => {
  return await axios.get(`http://localhost:9000/tasks`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const HomePage = () => {
  const [water, setWater] = useState<any>("");
  const [sleep, setSleep] = useState<any>("");
  const [data, setData] = useState<Task[]>([]);
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [sleepData, setSleepData] = React.useState<Sleep[]>([]);
  const [waterData, setWaterData] = React.useState<Water[]>([]);
  const [dateState, setDateState] = useState(new Date());
  const [waterSuccess, setWaterSuccess] = useState<boolean>(false);
  const [sleepSuccess, setSleepSuccess] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  let currentPath = window.location.pathname;
  const handleSleepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSleep({ ...sleep, [name]: value });
  };
  const handleWaterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWater({ ...water, [name]: value });
  };
  useEffect(() => {
    fetchTasks()
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleClick = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task._id === id) {
        return { ...task, completed: !task.checked };
      } else {
        return task;
      }
    });
    setTasks(newTasks);
  };
  const createSleepValues = async (sleep: any) => {
    await axios.post(`http://localhost:9000/sleep`, sleep, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const createWaterValues = async (water: any) => {
    await axios.post(`http://localhost:9000/water`, water, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const getSleep = async () => {
    await axios
      .get(`http://localhost:9000/sleep`)
      .then((response) => {
        setSleepData(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getSleep();
  }, []);
  const getWater = async () => {
    await axios
      .get(`http://localhost:9000/water`)
      .then((response) => {
        setWaterData(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getWater();
  }, []);
  const updateSleep = async (
    hoursSlept: string | undefined,
    minutesSlept: string | undefined,
    _id: string
  ) => {
    await axios
      .put(
        `http://localhost:9000/sleep/${_id}`,
        { ...sleep, ...sleepData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9kZHk5NzZAZ21haWwuY29tIiwidXNlcklkIjoiNjQyNGM4ZmU1ZGE0YTU2YjNmZmFkYjlkIiwiaWF0IjoxNjgwMjMyNTg3LCJleHAiOjE2ODAzMTg5ODd9.NknlP8Swrw7dqmh5ABwdNs-WLyGK2XAUjFk7FkCqkJc`,
          },
        }
      )
      .then((response) => {
        setSleepSuccess(true);
        setTimeout(() => {
          setSleepSuccess(false);
          window.location.reload();
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  const updateWater = async (
    cupsDrank: string | undefined,
    cupsTotal: string | undefined,
    _id: string
  ) => {
    await axios
      .put(
        `http://localhost:9000/water/${_id}`,
        { ...water, ...waterData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9kZHk5NzZAZ21haWwuY29tIiwidXNlcklkIjoiNjQyNGM4ZmU1ZGE0YTU2YjNmZmFkYjlkIiwiaWF0IjoxNjgwMjMyNTg3LCJleHAiOjE2ODAzMTg5ODd9.NknlP8Swrw7dqmh5ABwdNs-WLyGK2XAUjFk7FkCqkJc`,
          },
        }
      )
      .then((response) => {
        setWaterSuccess(true);

        setTimeout(() => {
          setWaterSuccess(false);

          window.location.reload();
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  const handleSaveWaterButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!water) {
      const values = {
        ...water,
      };
      await createWaterValues(values)
        .then(async (response) => {
          setTimeout(() => {
            window.location.reload();
          }, 0);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    await updateWater(
      waterData[waterData.length - 1].cupsDrank,
      waterData[waterData.length - 1].cupsTotal,
      waterData[waterData.length - 1]._id
    );
  };
  const handleSaveSleepButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!sleep) {
      const values = {
        ...sleep,
      };

      await createSleepValues(values)
        .then(async (response) => {
          setTimeout(() => {
            window.location.reload();
          }, 0);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    await updateSleep(
      sleepData[sleepData.length - 1].hoursSlept,
      sleepData[sleepData.length - 1].minutesSlept,
      sleepData[sleepData.length - 1]._id
    );
  };
  const handleToDoClick = () => {
    navigate("/to-do-list");
  };
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
            onChange={handleSleepChange}
            name="hoursSlept"
            placeholder={sleepData[sleepData.length - 1]?.hoursSlept || "0"}
          />{" "}
          Hr{" "}
          <input
            onChange={handleSleepChange}
            name="minutesSlept"
            placeholder={sleepData[sleepData.length - 1]?.minutesSlept || "0"}
          />
          min
        </h1>

        <button onClick={async (e) => await handleSaveSleepButton(e)}>
          save
        </button>
      </div>
      <div id="coolBox">.</div>
      <div id="waterDiv">
        <p>WATER</p>{" "}
        {waterData && (
          <h1 className="homeInput">
            <input
              onChange={handleWaterChange}
              name="cupsDrank"
              placeholder={waterData[waterData.length - 1]?.cupsDrank || "0"}
            />
            out of
            <input
              onChange={handleWaterChange}
              name="cupsTotal"
              placeholder={waterData[waterData.length - 1]?.cupsTotal || "8"}
            />
          </h1>
        )}
        <button onClick={async (e) => await handleSaveWaterButton(e)}>
          save
        </button>
      </div>
      <div id="coolBox2">.</div>
      <div id="toDoDiv">
        <h1 onClick={handleToDoClick}>To-do List</h1>
        {data?.map((task: Task) => {
          return (
            <div>
              <div className="checkbox">
                <FormControlLabel
                  key={task._id}
                  control={
                    <Checkbox
                      sx={{
                        color: "rgba(201, 185, 163, 0.8)",
                        "&.Mui-checked": {
                          color: grey[600],
                        },
                        "& .MuiSvgIcon-root": { fontSize: 18 },
                      }}
                      checked={task.checked}
                      onClick={() => handleClick(task._id)}
                    />
                  }
                  label={
                    <span
                      style={{
                        fontSize: "15px",
                        fontFamily: "'Sora',sans-serif",
                        fontWeight: "500",
                        color: "#3b3c49",
                      }}
                    >
                      {task.task}
                    </span>
                  }
                />
              </div>
            </div>
          );
        })}
        <Plant />
      </div>
      {waterSuccess && (
        <Stack sx={{ width: "100%" }}>
          <Alert
            severity="success"
            color="success"
            style={{ position: "fixed", bottom: "0vh" }}
          >
            You have successfully updated cups of water you've drank
          </Alert>
        </Stack>
      )}{" "}
      {sleepSuccess && (
        <Stack sx={{ width: "100%" }}>
          <Alert
            severity="success"
            color="success"
            style={{ position: "fixed", bottom: "0vh" }}
          >
            You have successfully updated hours/minutes of sleep you've gotten
          </Alert>
        </Stack>
      )}
    </div>
  );
};
