import { useState, useEffect } from "react";
import { getHours, getMinutes, getSeconds } from "date-fns";
import Layout from "../components/layout/Layout";

function getTimes(date) {
  return {
    hour: getHours(date),
    minutes: getMinutes(date),
    seconds: getSeconds(date),
  };
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function ClockPage() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date());
    }, 1000);
  }, [date]);

  const time = getTimes(date);

  return (
    <Layout>
      <h1>Clock Page</h1>
      <h1>
        {formatTime(time.hour)} : {formatTime(time.minutes)} :
        {formatTime(time.seconds)}
      </h1>
    </Layout>
  );
}

export default ClockPage;
