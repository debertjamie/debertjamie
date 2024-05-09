"use client";

import React from "react";

const formatDay = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  weekday: "long",
  year: "numeric",
  month: "long",
  timeZone: "Asia/Jakarta",
});

const formatTime = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Asia/Jakarta",
  timeZoneName: "shortGeneric",
});

export function Time() {
  const [now, setNow] = React.useState(0);

  React.useEffect(() => {
    setNow(Date.now());

    const interval = setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isDay =
    new Date(now).getUTCHours() + 7 >= 5 &&
    new Date(now).getUTCHours() + 7 < 19;

  return (
    <p className="text-sm" suppressHydrationWarning={true}>
      {isDay ? "🌤️" : "😴"} {formatDay.format(now)} - {formatTime.format(now)}
    </p>
  );
}
