import { longcang } from "@/ui/fonts";

export function Summary() {
  return (
    <>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">DEBERT JAMIE CHANDERSON</h1>
        <h1 className="text-2xl">
          <span className={longcang.className + " text-3xl"}>陈宥维</span> Chen
          You Wei
        </h1>
      </div>
      <div className="space-y-2 text-lg">
        <p>
          Hey! I&#39;m Debert Jamie, a student from Indonesia who likes to
          tinker with code. Brewing new creations line by line everyday ⌨️ A
          math fanboy at brain who likes to wrangle with x&#39;s and y&#39;s.
        </p>
        <p>
          I&#39;m either foot-deep in ones and zeroes, daydreaming about the
          perfect trifecta for dinner, jamming over calculus and trigs, blasting
          my ears with music, or blending in with other human beings 🎏
        </p>
      </div>
      <div
        className={
          longcang.className +
          " bg-secondary border-accent border-2 rounded-xl w-fit px-4 py-2 space-y-2"
        }
      >
        <p className="text-3xl">&#12300;读万卷书，行万里路。&#12301;</p>
      </div>
    </>
  );
}
