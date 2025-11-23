export interface Song {
  id: number;
  title: string;
  note?: string;
}

export interface CastMember {
  role: string;
  name: string;
}

export interface SectionData {
  id: string;
  title: string;
  subtitle?: string;
}

export interface TeamMember {
  role: string;
  name: string;
}
