import { bpmf, maiyuan } from "@/ui/fonts/fonts";

const randomFacts = [(
    <span>
      I learned English by watching movies and playing video games
    </span>
  ), (
    <span>
      During 8th grade I self-taught myself to code in JavaScript and Python
    </span>
  ), (
    <span>
      Sometimes I like to photograph nature and landscapes wherever I go (page SOON!)
    </span>
  ), (
    <span>
      I love drinking coffee and tea, but I prefer tea more than coffee
    </span>
  ), (
    <span>
      <span className={`${maiyuan.className}`}>我的母語是閩南語</span> guá ē-hiáu Hok-kiàn-uē, but mostly speaking and listening
    </span>
  ), (
    <span>
      I like traveling and exploring new places, I also like self-traveling!
    </span>
  )];

export function Random() {
  return (
    <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 ml-5 text-base list-disc">
      {randomFacts.map((f, i) => (
        <li key={i} className="marker:text-spicy-mix dark:marker:text-spicy-mix-dark">
          {f}
        </li>
      ))}
    </ul>
  )
}