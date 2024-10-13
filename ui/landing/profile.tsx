import Image from "next/image";
import Link from "next/link";

export function SpotifyProfile() {
  return (
    <Link href="https://open.spotify.com/user/31cquejvozvwhwj6vv3snek5asfu"
          target="_blank"
          rel="norefferer noopener"
          className="block text-lg flex gap-x-4 items-center rounded-lg px-4 py-2 bg-green-500 dark:bg-green-600 w-fit"
    >
      <Image
        src="https://i.scdn.co/image/ab6775700000ee853087460ae8b6c94f85cc5932"
        alt="Spotify profile picture"
        width={0}
        height={0}
        sizes="100%"
        className="rounded-full w-12 h-12 md:w-16 md:h-16"
      />
      <div>
        <p className="font-semibold text-xl">Debert Jamie</p>
        <p>SPOTIFY</p>
      </div>
    </Link>
  )
}

export function YoutubeMusicProfile() {
  return (
    <Link href="https://music.youtube.com/channel/UCUAvn5kqbBvABRPd7XeoFRA"
          target="_blank"
          rel="norefferer noopener"
          className="block text-lg flex gap-x-4 items-center rounded-lg px-4 py-2 bg-red-600 w-fit"
    >
      <Image
        src="https://yt3.googleusercontent.com/ytc/AIdro_kNVdbVAvCWMyJThxjciy6tgNVylvgSw-6VJdNBnw10fVM=w226-c-h226-k-c0x00ffffff-no-l90-rj"
        alt="Youtube Music profile picture"
        width={0}
        height={0}
        sizes="100%"
        className="rounded-full w-12 h-12 md:w-16 md:h-16"
      />
      <div>
        <p className="font-semibold text-xl">@DebertJamie2095</p>
        <p>YOUTUBE MUSIC</p>
      </div>
    </Link>
  )
}