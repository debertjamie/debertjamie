import Image from "next/image";

export function Photo() {
  return (
    <>
      <div className="space-y-1 lg:flex lg:gap-x-6">
        <Image
          src="/DebertJamie.jpg"
          alt="Debert Jamie"
          width={0}
          height={0}
          sizes="100%"
          className="rounded-xl bg-secondary w-full h-full lg:rounded-full lg:w-20"
          priority={true}
        />
        <p className="text-base lg:hidden">A photo of me 📸</p>
        <div className="hidden lg:flex lg:flex-col lg:justify-center">
          <h3 className="text-xl font-semibold text-brand-400 dark:text-brand-300">
            @Debert Jamie Chanderson
          </h3>
          <div className="flex flex-wrap text-lg">
            <p>
              AKA{" "}
              <span className="text-brand-400 dark:text-brand-300">
                陈宥维 Chen You Wei
              </span>
            </p>
          </div>
        </div>
      </div>

      <p className="hidden lg:block text-base">
        High Schooler, Espresso Addict, Digital Alchemist
      </p>
    </>
  );
}
