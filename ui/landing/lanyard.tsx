"use client";

import Image from "next/image";
import { useLanyard } from "react-use-lanyard";
import React from "react";
import { formatDistance } from "date-fns";

const colors: Record<string, string> = {
  online: "bg-green-500",
  idle: "bg-amber-500",
  dnd: "bg-red-600",
  offline: "bg-gray-400",
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
  const { status: lanyard } = useLanyard({
    userId: "755773452756975646",
    socket: true,
  });
  const otherActivities = lanyard?.activities.filter(
    (activity) => activity.type !== 2 && activity.type !== 4
  );

  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-1 px-2 rounded-lg bg-indigo-600 text-cyan-50 flex flex-col gap-y-2 justify-center">
      <div className="flex gap-x-4 justify-between items-center">
        <div className="flex gap-4 items-center">
          {lanyard?.discord_user.avatar ? (
            <div className="w-12 h-12 md:w-16 md:h-16 relative">
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
                className="rounded-full w-12 h-12 md:w-16 md:h-16"
              />
              <div
                className={`absolute bottom-0.5 right-0.5 w-4 h-4 md:w-4 md:h-4 rounded-full ${
                  colors[lanyard?.discord_status]
                }`}
              />
            </div>
          ) : (
            <></>
          )}
          {lanyard ? (
            <div className="leading-tight flex flex-col justify-between">
              {lanyard.discord_user.global_name ? (
                <>
                  <p className="font-semibold text-lg">
                    {lanyard.discord_user.global_name}
                  </p>
                  <p className="text-base">{lanyard.discord_user.username}</p>
                </>
              ) : (
                <p className="font-semibold text-lg">
                  {lanyard.discord_user.username}
                </p>
              )}
            </div>
          ) : (
            <p className="text-lg">Loading Discord profile</p>
          )}
        </div>
      </div>
      {otherActivities?.length && (
        <div className="space-y-2">
          {otherActivities.map((act) => (
            <div
              key={act.application_id}
              className="leading-tight text-base ml-2"
            >
              <p>
                {activityTypes[act.type]}{" "}
                <span className="font-semibold">{act.name}</span>
              </p>
              {act.details && <p className="tracking-tight">{act.details}</p>}
              <p className="text-sm font-semibold">
                {formatDistance(now, act.timestamps?.start ?? act.created_at)}{" "}
                elapsed
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
