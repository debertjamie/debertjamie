import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { getAccessToken } from "@/lib/spotify";
import { spotifyId } from "@/app/env.mjs";

export const runtime = "edge";

export async function GET() {
  const accessToken = await getAccessToken();
  const api = SpotifyApi.withAccessToken(spotifyId!, accessToken);
  const currentlyPlaying = await api.player.getCurrentlyPlayingTrack();

  if (currentlyPlaying.item && "album" in currentlyPlaying.item && currentlyPlaying.is_playing) {
    return new Response(
      JSON.stringify({
        album: currentlyPlaying.item.album.name,
        albumImageUrl: currentlyPlaying.item.album.images[0].url,
        artist: currentlyPlaying.item.artists
          .map((artist) => artist.name)
          .join(", "),
        isPlaying: currentlyPlaying.is_playing,
        songUrl: currentlyPlaying.item.external_urls.spotify,
        title: currentlyPlaying.item.name,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
          "cache-control": "public, s-maxage=180, stale-while-revalidate=90",
        },
      }
    );
  } else {
    return new Response(
      JSON.stringify({
        isPlaying: false,
      }),
      {
        status: 200,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }


}
