"use client";

import React from "react";
import Image from "next/image";

const formatWeekday = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
});

const formatDay = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
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

const formatSimpleTime = new Intl.DateTimeFormat("en-GB", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Asia/Jakarta",
});

export function Time({ simple = false }: { simple?: boolean }) {
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

  return simple ? (
    <span suppressHydrationWarning>{formatSimpleTime.format(now)}</span>
  ) : (
    <div className="relative flex items-center justify-center h-7">
      {isDay ? (
        <Image
          src="https://em-content.zobj.net/source/microsoft-teams/363/grinning-face_1f600.png"
          alt="Grinning"
          width={0}
          height={0}
          sizes="100%"
          className="inline-block w-7"
          unoptimized
        />
      ) : (
        <Image
          src="https://em-content.zobj.net/source/microsoft-teams/337/sleeping-face_1f634.png"
          alt="Sleeping"
          width={0}
          height={0}
          sizes="100%"
          className="inline-block w-7"
          unoptimized
        />
      )}
      <p suppressHydrationWarning className="inline-block pl-2">
        {formatWeekday.format(now)}, {formatDay.format(now)}{" "}
        {formatTime.format(now)}
      </p>
    </div>
  );
}
