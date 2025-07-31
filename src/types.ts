// types.ts

export interface ProfileBanner {
  headline: string;
  profileSummary: string;
  resumeLink: { url: string };
  linkedinLink: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate: Date;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  title: string;
  name: string;
  dateRange: string;
  timelineType: "work" | "education";
  techStack: string;
  summaryPoints: string[];
}
export interface Project {
  title: string;
  description: string;
  image: { url: string };
  techUsed: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: string;
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}
