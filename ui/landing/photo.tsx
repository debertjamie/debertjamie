import Image from "next/image";

export function Photo() {
  return (
    <div className="space-y-1">
      <Image
        src="/DebertJamie.jpg"
        alt="Debert Jamie"
        width={395}
        height={395}
        className="rounded-xl bg-secondary"
        priority={true}
      ></Image>
      <p className="text-base lg:text-center">A photo of me 📸</p>
    </div>
  );
}
