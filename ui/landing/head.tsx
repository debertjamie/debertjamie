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

export function Head() {
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
    <div className="space-y-6">
      <div className="space-y-2 *:leading-tight">
        <h1 className="text-4xl font-bold">@Debert</h1>
        <h3 className="text-xl font-semibold">
          Also Known As: 陈宥维 / 陳宥維 / Debert Jamie Chanderson
        </h3>
        <p className="text-base">
          High Schooler, Espresso Addict, Math Maven, Tech Ardent
        </p>
      </div>
      <p className="text-lg" suppressHydrationWarning={true}>
        {isDay ? "🌤️" : "😴"} {formatDay.format(now)} {formatTime.format(now)}
      </p>
    </div>
  );
}
