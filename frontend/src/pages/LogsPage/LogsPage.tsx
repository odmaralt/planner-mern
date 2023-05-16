import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useUserProvider } from "../../provider/UserProvider";
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
interface Journal {
  journal: string;
  _id: string;
}
interface ILogsPage {
  user: boolean | undefined;
}
export const LogsPage: React.FC<ILogsPage> = ({ user }) => {
  const [sleepData, setSleepData] = React.useState<Sleep[]>([]);
  const [waterData, setWaterData] = React.useState<Water[]>([]);
  const [data, setData] = React.useState<Journal[]>([]);
  const { userId } = useUserProvider();
  let currentPath = window.location.pathname;
  const getSleep = async () => {
    await axios
      .get(`http://localhost:9000/${userId}/sleeps`)
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
      .get(`http://localhost:9000/${userId}/waters`)
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
      .get(`http://localhost:9000/${userId}/journals`)
      .then((response) => {
        setData(response.data);
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
            {sleepData &&
              sleepData.map((sleep: Sleep) => (
                <td style={{ display: "block" }} key={sleep._id}>
                  {sleep.hoursSlept}hr
                  {sleep.minutesSlept}min
                </td>
              ))}
            {!sleepData && <td>0hr0min</td>}
            {waterData &&
              waterData.map((water: Water) => (
                <td style={{ display: "block" }} key={water._id}>
                  {water.cupsDrank} out of {water.cupsTotal}
                </td>
              ))}
            {!waterData && <td>0 out of 0</td>}
            {data &&
              data.map((journal: Journal) => (
                <div
                  style={{
                    height: "50px",
                    overflow: "scroll",
                    display: "block",
                  }}
                  key={journal._id}
                >
                  <td className="journal"> {journal.journal}</td>
                </div>
              ))}
            {!data && <td className="journal">No journal</td>}
          </tr>
        </div>
      </table>
    </div>
  );
};
