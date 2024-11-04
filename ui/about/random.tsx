import Link from "next/link";

const randomFacts = [{
  title: "Favourite Book",
  content: (
    <p>One of my favourite books is "<Link
      href="https://www.popularonline.com.my/cnsimplified/catalog/product/view/_ignore_category/1/id/110199/s/9789674143572/?did=8"
      target="_blank" rel="norefferer noopener"
      className="text-sky-700 dark:text-sky-400">烂鬼熊猫搞烂GAG 2</Link>" by 大田.
    </p>
  ),
}, {
  title: "Bored During COVID",
  content: (
    <p>
      During COVID I learned programming and created a website out of boredom.
    </p>
  ),
}];

export function Random() {
  const randomFact = randomFacts[Math.floor(Math.random() * randomFacts.length)];
  return (
    <div
      className="w-fit bg-stone-200 dark:bg-stone-800 px-4 py-2 rounded-r-xl border-l-4 border-l-blue-500 dark:border-l-blue-800">
      <h3 className="text-xl font-semibold">{randomFact.title}</h3>
      {randomFact.content}
    </div>
  )
}