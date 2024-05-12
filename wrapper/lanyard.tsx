"use client";

import Image from "next/image";
import { useLanyard } from "react-use-lanyard";
import React from "react";
import { formatDistance } from "date-fns";

const colors: Record<string, string> = {
  online: "text-green-500",
  idle: "text-amber-400",
  dnd: "text-red-400",
  offline: "text-gray-300",
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
    (activity) => activity.type !== 2 && activity.type !== 4,
  );

  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-1 px-2 rounded-lg bg-brand-900 border-2 dark:border-brand-800 text-brand-50 space-y-2">
      <div className="flex gap-x-4 justify-between items-center">
        <div className="flex gap-4 items-center">
          {lanyard?.discord_user.avatar ? (
            <div className="w-12 h-12 md:w-16 md:h-16">
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
                className="rounded-full w-12 h-12 md:w-16 md:h-16 bg-brand-700"
              />
            </div>
          ) : (
            <></>
          )}
          {lanyard ? (
            <div className="leading-tight">
              <p className="font-semibold text-lg">
                {lanyard.discord_user.username}
              </p>
              <p
                className={
                  colors[lanyard.discord_status] + " text-base font-semibold"
                }
              >
                {lanyard.discord_status.toUpperCase()}
              </p>
            </div>
          ) : (
            <p className="text-lg">Loading discord profile</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        {otherActivities?.map((act) => (
          <div
            key={act.application_id}
            className="leading-tight text-base ml-2"
          >
            <p>
              {activityTypes[act.type]}{" "}
              <span className="font-semibold">{act.name}</span>
            </p>
            {act.details ? (
              <p className="tracking-tight">{act.details}</p>
            ) : (
              <></>
            )}
            <p className="text-sm font-semibold">
              {formatDistance(now, act.timestamps?.start ?? act.created_at)}{" "}
              elapsed
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
