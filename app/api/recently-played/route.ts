import { SpotifyAuthError, getRecentlyPlayed } from "@/lib/spotify";

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
  let res: Awaited<ReturnType<typeof getRecentlyPlayed>>;

  try {
    res = await getRecentlyPlayed();
  } catch (error) {
    if (error instanceof SpotifyAuthError) {
      return new Response(JSON.stringify({ error: true, message: error.message, list: [] }), {
        status: 503,
        headers: {
          "content-type": "application/json",
          "Cache-Control": "no-cache",
        },
      });
    }

    throw error;
  }

  if (res.status === 204) {
    return new Response(JSON.stringify({ error: false, list: [] }), {
      status: 200,
      headers: {
        "content-type": "application/json",
        "Cache-Control": "no-cache",
      },
    });
  }

  if (!res.ok) {
    const text = await res.text();
    return new Response(JSON.stringify({ error: true, message: text }), {
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
