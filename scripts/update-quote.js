const fs = require("fs");
const path = require("path");

const README = path.join(__dirname, "..", "README.md");
const START = "<!--START_SECTION:quote-->";
const END = "<!--END_SECTION:quote-->";

const QUOTES = [
  { q: "生活是种律动，须有光有影，有左有右，有晴有雨，滋味就含在这变而不猛的曲折里。", a: "老舍" },
  { q: "生活不能等待别人来安排，要自己去争取和奋斗；而不论其结果是喜是悲，但可以慰藉的是，你总不枉在这世界上活了一场。", a: "路遥" },
  { q: "最初我们来到这个世界，是因为不得不来；最终我们离开这个世界，是因为不得不走。", a: "余华" },
  { q: "我活在世上，无非想要明白些道理，遇见些有趣的事。倘能如我所愿，我的一生就算成功。", a: "王小波" },
  { q: "草在结它的种子，风在摇它的叶子。我们站着，不说话，就十分美好。", a: "顾城" },
  { q: "有些事，只能一个人做。有些关，只能一个人过。有些路啊，只能一个人走。", a: "龙应台" },
  { q: "It works on my machine.", a: "Every developer ever" },
  { q: "Talk is cheap. Show me the code.", a: "Linus Torvalds" },
  { q: "You aren't required to set yourself on fire to keep other people warm.", a: "Penny Reid" },
  { q: "The first principle is that you must not fool yourself—and you are the easiest person to fool.", a: "Richard Feynman" },
  { q: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.", a: "Marcus Aurelius" },
  { q: "The cost of procrastinating is the life you could've lived.", a: "Anonymous" },
  { q: "The only way to go fast is to go well.", a: "Robert C. Martin" },
  { q: "Orang boleh pandai setinggi langit, tapi selama ia tidak menulis, ia akan hilang di dalam masyarakat dan dari sejarah.", a: "Pramoedya Ananta Toer" },
];

function pickQuote() {
  const dayIndex = Math.floor(Date.now() / 86_400_000);
  return QUOTES[dayIndex % QUOTES.length];
}

function main() {
  const { q, a } = pickQuote();
  const block = `${START}\n_"${q}"_ — ${a}\n${END}`;

  const readme = fs.readFileSync(README, "utf8");

  const pattern = new RegExp(`${START}[\\s\\S]*?${END}`);
  if (!pattern.test(readme)) {
    console.error("Quote markers not found in README.md. Nothing updated.");
    process.exit(1);
  }

  const updated = readme.replace(pattern, block);
  if (updated === readme) {
    console.log("Quote unchanged, nothing to commit.");
    return;
  }

  fs.writeFileSync(README, updated);
  console.log(`Updated quote: "${q}" — ${a}`);
}

main();
