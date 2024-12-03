const timeline = [
  {title: "SRD Division - Komatik UGM", time: "Nov 2024 - Current", details: "Member of Software Research Development Division in Information Technology and Communication Students Association (Komatik)"},
  {title: "Frontend Developer - FindIT! UGM", time: "Oct 2024 - Current"},
  {title: "Backend Developer - Electoral Comission of KMTETI", time: "Sept 2024 - Nov 2024", details: "Build and maintain backend systems for the 2025 Chairman of the Electrical and Information Engineering Students Association (KMTETI) Election"},
  {title: "Undergraduate Study at UGM", time: "2024 - Current", details: "Majoring in Information Engineering at Gadjah Mada University Yogyakarta"},
  {title: "Cinta Budaya High School Student Council - Main IT Coordinator", time: "Mar 2023 - Mar 2024", details: "Handle and coordinate the IT systems for school-held and student-held events reaching over 900 audiences"},
  {title: "Cinta Budaya High School English Club", time: "2022 - 2024", details: "Develop and enhance skills in argumentation, communication, persuasion and critical thinking abilities"},
];

export function Timeline() {
  return (
    <section className="text-xl">
      <p className="md:text-center text-base -mb-8">And the journey continues...</p>
      <div className="relative max-w-6xl mx-auto text-base">
        <div
          className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-zinc-950 dark:bg-zinc-100 transform -translate-x-1/2"/>
        <div
          className="md:hidden absolute top-0 bottom-0 left-0 w-0.5 bg-zinc-950 dark:bg-zinc-100 transform -translate-x-1/2"/>
        {timeline.map((t, index) => (
          <div key={t.title}>
            <div className={`hidden md:flex ${index % 2 === 0 ? "justify-start" : "justify-end"} w-full my-8`}>
              <div className={`relative w-1/2 p-6 ${index % 2 === 0 ? "text-right" : ""}`}>
                <div
                  className={`absolute top-1/2 w-3 h-3 bg-zinc-950 dark:bg-zinc-100 rounded-full transform -translate-y-1/2 ${index % 2 === 0 ? '-right-1.5' : '-left-1.5'}`}/>
                <h2 className="text-lg font-semibold">{t.title}</h2>
                {t.details && <p className="text-sm">{t.details}</p>}
                <p className="text-gray-600 dark:text-gray-400">{t.time}</p>
              </div>
            </div>
            <div className="flex md:hidden justify-start w-full my-8">
              <div className="relative p-6">
                <div
                  className="absolute top-1/2 w-3 h-3 bg-zinc-950 dark:bg-zinc-100 rounded-full transform -translate-y-1/2 -left-1.5"/>
                <h2 className="text-xl font-semibold">{t.title}</h2>
                {t.details && <p>{t.details}</p>}
                <p className="text-gray-600 dark:text-gray-400">{t.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}