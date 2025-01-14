import {Spotify, SpotifyProfile, YoutubeMusicProfile} from ".";

export function Activities() {
  return (
    <section className="text-xl">
      <h2 className="font-semibold">My Recent Activities</h2>
      <div className="grid md:grid-cols-[auto_20rem] gap-x-8 gap-y-4">
        <div>
          <div className="text-justify space-y-3">
            <p>
              I mostly spend my time studying and working on school or personal projects. Currently I'm
              exploring more about backend development and system integrations. I also love to listen to
              music and watch movies in my free time. Other than that, I use my time socializing with my
              peers and friends.
            </p>
            <p>
              In my free time I also play some music to get the mood going. You can check out my Spotify
              profile below and my (currently inactive) Youtube Music profile as well.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:mt-8">
            <SpotifyProfile/>
            <YoutubeMusicProfile/>
          </div>
        </div>
        <Spotify/>
      </div>
    </section>
  )
}