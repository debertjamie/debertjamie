import {Spotify, SpotifyProfile, YoutubeMusicProfile} from ".";

export function Activities() {
  return (
    <section className="text-xl">
      <h2 className="font-semibold">What I've Been Doing</h2>
      <div className="grid md:grid-cols-[auto_20rem] gap-x-8 gap-y-4">
        <div>
          <p className="text-justify mb-4">
            As a freshman I mostly spend my time studying and working on school or organizational projects. I also spend
            time in working on some personal side projects. Currently I'm exploring more about backend development and
            system integrations. I also love to listen to music and watch movies in my free time.
          </p>
          <div className="flex flex-wrap gap-4 lg:mt-12">
            <SpotifyProfile/>
            <YoutubeMusicProfile/>
          </div>
        </div>
        <Spotify/>
      </div>
    </section>
  )
}