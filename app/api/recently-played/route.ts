import { getRecentlyPlayed } from "@/lib/spotify";

export const runtime = "edge";

interface Item {
  track: {
    name: string;
    album: {
      name: string;
      images: {
        url: string;
      }[];
    };
    artists: {
      name: string;
    }[];
    explicit: boolean;
    external_urls: {
      spotify: string;
    };
  };
}

export async function GET() {
  const res = await getRecentlyPlayed();

  if (res.status !== 200) {
    return new Response(JSON.stringify({ error: true }), {
      status: res.status,
      headers: {
        "content-type": "application/json",
      },
    });
  }

  const list = (await res.json()).items as Item[];
  const refinedList = list.map((l) => {
    const ref = {
      track: {
        name: l.track.name,
        album: {
          name: l.track.album.name,
          image: l.track.album.images[0].url,
        },
        artists: l.track.artists.map((artist) => artist.name),
        explicit: l.track.explicit,
        url: l.track.external_urls.spotify,
      }
    };
    return ref;
  });

  return new Response(JSON.stringify({ error: false, list: refinedList }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
