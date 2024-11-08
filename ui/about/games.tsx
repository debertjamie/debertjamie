import Link from "next/link";
import {MinecraftLogo, CODLogo, SteamIcon, XboxIcon} from "@/ui/icons";

export function Games() {
  return (
    <div className="bg-gray-400 dark:bg-gray-900 rounded-xl px-4 py-2 grid grid-rows-[auto_1fr_auto] gap-y-2 text-xl">
      <p>Games I Play</p>
      <div className="space-y-6">
        <div className="flex flex-wrap gap-y-4 gap-x-12 text-base">
          <div className="flex flex-col items-center">
            <MinecraftLogo className="h-24 w-24"/>
            <p>Minecraft</p>
          </div>
          <div className="flex flex-col items-center">
            <CODLogo className="h-24 w-24"/>
            <p>Call of Duty</p>
          </div>
        </div>
        <p>
          Currently I didn't play a lot of games. I'm also recently more focused on grinding my skills and participate
          in communities and/or organizations.
        </p>
        <p>You can check my profile on Steam and Xbox on the links below</p>
      </div>
      <div className="flex gap-x-4 text-base">
        <Link
          href="https://steamcommunity.com/id/debertjamie/"
          target="_blank"
          rel="noreferrer noopener"
          className="block rounded-lg px-2 py-1 bg-blue-950 text-zinc-100 w-fit"
        >
          <SteamIcon className="inline w-8 mr-2"/>
          Debert#6913
        </Link>
        <Link
          href="https://www.xbox.com/play/user/DebertJamie5386"
          target="_blank"
          rel="noreferrer noopener"
          className="block rounded-lg px-2 py-1 bg-green-900 text-zinc-100 w-fit"
        >
          <XboxIcon className="inline w-8 mr-2"/>
          DebertJamie#5386
        </Link>
      </div>
    </div>
  );
}