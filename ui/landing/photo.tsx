import Image from "next/image";

export function Photo() {
  return (
    <div className="space-y-1 lg:flex lg:gap-x-6">
      <Image
        src="/DebertJamie.jpg"
        alt="Debert Jamie"
        width={0}
        height={0}
        sizes="100%"
        className="rounded-xl bg-secondary w-full h-full lg:rounded-full lg:w-20"
        priority={true}
      ></Image>
      <p className="text-base lg:hidden">A photo of me 📸</p>
      <div className="hidden lg:flex lg:flex-col lg:justify-center">
        <h3 className="text-xl font-semibold text-accent">@DebertJamieChanderson</h3>
        <div className="flex flex-wrap text-sm">
          <p>High Schooler, Espresso Addict, Math Maven, Tech Admirer</p>
        </div>
      </div>
    </div>
  );
}
