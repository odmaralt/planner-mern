import axios from "axios";
import React, { useEffect, useState } from "react";
import uuidRandom from "uuid-random";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { Header } from "../../components/Header";
import "./JournalPage.css";

const promptsArr = [
  "I am grateful for...",
  "Daily affirmation",
  "Three things that happened today:",
  "How could I have made today better?",
  "Highlight and lowlight of the day",
  "What kind of person do you want to be next year?",
  "Describe your perfect morning.",
  "What fear can you overcome?",
  "What kind of day are you having, and why?",
  "What are your strengths in relationships (kindness, empathy, etc.)?",
  "Describe one or two significant life events that helped shape you into who you are today. ",
  "Finish this sentence: “My life would be incomplete without …”",
];
export const JournalPage = () => {
  const initialValues = {
    journal: "",
    _id: "",
    date: "",
  };
  const [formValues, setFormValues] = useState<any>(initialValues);
  const [message, setMessage] = useState("");
  const [data, setData] = useState<string>();
  const [success, setSuccess] = useState<boolean>(false);

  let currentPath = window.location.pathname;
  const date = new Date();

  const randomNum = Math.floor(Math.random() * promptsArr.length);
  let random = promptsArr[randomNum];
  const handleRefresh = () => {
    window.location.reload();
  };
  const handleJournalChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const message = e.target.value;
    setMessage(message);
    setFormValues((formValues: any) => ({
      ...formValues,
      journal: message,
      _id: uuidRandom(),
      date: date.toDateString(),
      customCreatedAt: date.toISOString(),
    }));
  };
  const createJournal = async (formValues: any) => {
    await axios.post(`http://localhost:9000/journal`, formValues, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const handleSaveButton = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
    });
    await createJournal({ ...formValues })
      .then(async (response) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getJournal = async () => {
    await axios
      .get(`http://localhost:9000/journals?sort=-createdAt&limit=1`)
      .then((response) => {
        setData(response.data[response.data.length - 1].journal);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getJournal();
  }, []);
  return (
    <div id="journalPageDiv">
      <Header currentPath={currentPath} />
      <div id="centerJournalBox">
        <div id="journalOutline">.</div>
        <div id="journalTitle">
          <p>Journal</p>
        </div>
        {data && (
          <textarea
            name="journal"
            onChange={handleJournalChange}
            id="journalBox"
          >
            {data}
          </textarea>
        )}
        {!data && (
          <textarea
            name="journal"
            placeholder={random}
            onChange={handleJournalChange}
            id="journalBox"
          ></textarea>
        )}

        <button id="promptButton" onClick={() => handleRefresh()}>
          Generate prompt
        </button>
      </div>
      <div id="saveJournalButton">
        <button onClick={async (e) => await handleSaveButton(e)}>Save</button>
      </div>
      {success && (
        <Stack sx={{ width: "100%" }}>
          <Alert
            severity="success"
            color="success"
            style={{ position: "fixed", bottom: "0vh" }}
          >
            You have successfully saved your journal
          </Alert>
        </Stack>
      )}
    </div>
  );
};
