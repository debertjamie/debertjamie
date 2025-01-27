import Link from "next/link";
import {MinecraftLogo, CODLogo, SteamIcon, XboxIcon} from "@/ui/icons";
import Image from "next/image";

export function Games() {
  return (
    <div className="bg-gray-400 dark:bg-gray-900 rounded-xl px-4 py-2 grid grid-rows-[auto_1fr_auto] gap-y-2 text-xl">
      <p>Games</p>
      <div className="space-y-6">
        <div className="flex flex-wrap gap-y-4 gap-x-12 text-base">
          <div className="flex flex-col items-center">
            <MinecraftLogo className="h-24 w-24"/>
            <p>Minecraft</p>
          </div>
          <div className="flex flex-col items-center">
            <CODLogo className="h-20 w-20 my-2"/>
            <p>Call of Duty</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://play-lh.googleusercontent.com/Hjn-8S7qK4Lo_UaynmkfFyh7PWYnYrZ25UdV_UnGLmcor2YQLru7H7n1r2BaHnX5HA=w240-h480-rw"
              alt="TheoTown" sizes="100%" height={0} width={0} className="w-16 h-16 my-4 rounded-xl select-none"/>
            <p>TheoTown</p>
          </div>
        </div>
        <p>
          Currently I rarely play any games, but I would use some hours on it during holidays.
        </p>
        <p>You can check my profile on Steam and Xbox on the links below</p>
      </div>
      <div className="flex gap-x-4 text-lg">
        <Link
          href="https://steamcommunity.com/id/debertjamie/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center rounded-lg px-2 py-1 bg-blue-950 text-zinc-100 w-fit"
        >
          <SteamIcon className="inline w-8 mr-2"/>
          Debert#6913
        </Link>
        <Link
          href="https://www.xbox.com/play/user/DebertJamie5386"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center rounded-lg px-2 py-1 bg-green-900 text-zinc-100 w-fit"
        >
          <XboxIcon className="inline w-8 mr-2"/>
          DebertJamie#5386
        </Link>
      </div>
    </div>
  );
}