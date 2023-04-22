import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import "./LogsPage.css";
interface Sleep {
  hoursSlept: string;
  minutesSlept: string;
  _id: string;
}
interface Water {
  cupsDrank: string;
  cupsTotal: string;
  _id: string;
}
interface ILogsPage {
  user: boolean | undefined;
}
export const LogsPage: React.FC<ILogsPage> = ({ user }) => {
  const [sleepData, setSleepData] = React.useState<Sleep[]>([]);
  const [waterData, setWaterData] = React.useState<Water[]>([]);
  const [data, setData] = useState<string>("");

  let currentPath = window.location.pathname;
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
  const getJournal = async () => {
    await axios
      .get(`http://localhost:9000/journals`)
      .then((response) => {
        setData(response.data[response.data.length - 1]?.journal);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getJournal();
  }, []);
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
        <div
          style={{
            borderTop: "0.5px solid #fff7ea93",
          }}
        >
          <tr>
            <td>1/1/2023</td>
            {sleepData && (
              <td>
                {sleepData[sleepData.length - 1]?.hoursSlept}hr{" "}
                {sleepData[sleepData.length - 1]?.minutesSlept}min
              </td>
            )}
            {!sleepData && <td>0hr0min</td>}

            {waterData && (
              <td>
                {waterData[waterData.length - 1]?.cupsDrank} out of{" "}
                {waterData[waterData.length - 1]?.cupsTotal}
              </td>
            )}
            {!waterData && <td>0 out of 0</td>}
            {data && (
              <div style={{ height: "50px", overflow: "scroll" }}>
                <td className="journal">{data}</td>
              </div>
            )}
            {!data && <td className="journal">No journal</td>}
          </tr>
        </div>
      </table>
    </div>
  );
};
