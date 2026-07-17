export interface ProjectType {
  title: string;
  projectUrl?: string;
  repository?: string;
  description: any;
  mainImage: {
    image: string;
    lqip: string;
    alt: string | null;
  };
}