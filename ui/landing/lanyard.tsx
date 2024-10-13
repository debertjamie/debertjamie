"use client";

import Image from "next/image";
import {useLanyard} from "react-use-lanyard";
import React from "react";
import {formatDistance} from "date-fns";

const status: Record<string, Record<string, string>> = {
  online: {style: "bg-green-500", text: "Active"},
  idle: {style: "bg-amber-500", text: "Idling"},
  dnd: {style: "bg-red-600", text: "Do Not Disturb"},
  offline: {style: "bg-gray-400", text: "Away"},
};

const activityTypes = [
  "Playing",
  "Streaming",
  "Listening to",
  "Watching",
  "Custom",
  "Competing in",
];

export function Lanyard() {
  const {status: lanyard} = useLanyard({
    userId: "755773452756975646",
    socket: true,
  });
  const otherActivities = lanyard?.activities.filter(
    (activity) => !lanyard.listening_to_spotify && activity.type !== 4
  );

  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 rounded-xl bg-indigo-600 text-zinc-100 h-fit">
      <div className="flex gap-x-4 mb-4">
        {lanyard?.discord_user.avatar ? (
          <div className="relative">
            <Image
              src={
                "https://cdn.discordapp.com/avatars/755773452756975646/" +
                lanyard.discord_user.avatar +
                "." +
                (lanyard.discord_user.avatar.startsWith("a_")
                  ? "gif"
                  : "png") +
                "?size=256"
              }
              alt="Discord profile picture"
              width={0}
              height={0}
              sizes="100%"
              priority={true}
              className="rounded-lg w-12 h-12 md:w-20 md:h-20"
            />
            <div
              className={`absolute bottom-[0.6875rem] -right-[2.125rem] w-4 h-4 md:w-4 md:h-4 rounded-full ${
                status[lanyard?.discord_status]["style"]
              }`}
            />
          </div>
        ) : (
          <></>
        )}
        {lanyard ? (
          <div className="flex flex-col justify-center">
            {lanyard.discord_user.global_name ? (
              <>
                <div>
                  <p className="font-semibold text-lg">
                    {lanyard.discord_user.global_name}
                  </p>
                  <p className="text-base -mt-2">{lanyard.discord_user.username}</p>
                </div>
                <p className="text-base ml-6">{status[lanyard?.discord_status]["text"]}</p>
              </>
            ) : (
              <p className="font-semibold text-lg">
                {lanyard.discord_user.username}
              </p>
            )}
          </div>
        ) : <p className="text-lg">Loading Discord profile</p>}
      </div>

      {!!otherActivities?.length ? (
        <div className="space-y-2">
          {otherActivities.map((act) => (
            <div
              key={act.application_id}
              className="leading-tight text-base"
            >
              <p>
                {activityTypes[act.type]}{" "}
                <span className="font-semibold">{act.name}</span>
              </p>
              {act.details && <p className="tracking-tight">{act.details}</p>}
              <p className="text-sm font-semibold">
                {act.type !== 2 ? `${formatDistance(now, act.timestamps?.start ?? act.created_at)} elapsed` : `${act.state}`}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
