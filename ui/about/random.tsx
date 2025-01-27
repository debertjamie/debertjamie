import Link from "next/link";
import {BookIcon, ComputerIcon} from "@/ui/icons";

const randomFacts = [{
  title: "I have a favourite cartoon book",
  content: (
    <p>One of my favourite cartoon comic strip book is called "烂鬼熊猫搞烂GAG 2" by 大田. I still read it occasionally
      when I'm bored or when I need some entertaining in my room.
    </p>
  ),
  icon: BookIcon
}, {
  title: "<p>Hello World!</p>",
  content: (
    <p>
      I first learned programming during the pandemic, and one of the first things I created was a simple personal
      website. It was a fun experience and inspired me to learn more about web development.
    </p>
  ),
  icon: ComputerIcon
}];

export function Random() {
  return (
    <div className="grid md:grid-cols-2 text-xl gap-4 *:rounded-xl *:bg-indigo-100 dark:*:bg-indigo-950">
      {randomFacts.map((f) => (
        <div key={f.title} className="px-6 py-4">
          <f.icon className="h-10 w-10 ml-2 mb-6"/>
          <h3 className="font-semibold mb-2">{f.title}</h3>
          {f.content}
        </div>
      ))}
    </div>
  )
}