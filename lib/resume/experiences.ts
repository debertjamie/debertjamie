export interface Position {
  position: string;
  company: string;
  location: string;
  url: string;
  startDate: string;
  endDate?: string;
  description: string;
  highlights?: string[];
}

export const experiences: Position[] = [
  {
    position: "Academic Tutor",
    company:
      "Department of Electrical and Information Engineering, Universitas Gadjah Mada",
    location: "Yogyakarta, Indonesia",
    url: "https://sarjana.jteti.ugm.ac.id/",
    startDate: "2025-08",
    endDate: "2025-12",
    description:
      "Tutored undergraduate students in single variable calculus course and assisted in their understanding of mathematical concepts and problem-solving techniques",
  },
  {
    position: "Lab Work Assistant",
    company:
      "Department of Electrical and Information Engineering, Universitas Gadjah Mada",
    location: "Yogyakarta, Indonesia",
    url: "https://sarjana.jteti.ugm.ac.id/",
    startDate: "2026-01",
    endDate: "2026-07",
    description:
      "Assisted in fundamentals of programming laboratory sessions for undergraduate students",
    highlights: [
      "Guided students in understanding programming concepts and problem-solving techniques",
      "Provided support in debugging and troubleshooting code",
      "Facilitated hands-on exercises and practical applications of programming concepts",
    ],
  },
  {
    position: "Web Developer",
    company:
      "Breathe Laboratory, Department of Electrical and Information Engineering, Universitas Gadjah Mada",
    location: "Yogyakarta, Indonesia",
    url: "https://hi-breathelab.id/",
    startDate: "2026-05",
    description:
      "Maintained and developed website for Breathe Laboratory, a research lab focused on human-computer interaction and wearable technology",
  },
];
