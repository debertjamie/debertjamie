export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  link: string;
}

export const education: Education[] = [
  {
    degree: "Information Engineering",
    institution: "Universitas Gadjah Mada",
    location: "Yogyakarta, Indonesia",
    startDate: "2024",
    endDate: "2028",
    link: "https://ugm.ac.id/",
  },
];
