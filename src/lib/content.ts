/**
 * Typed content loaders.
 *
 * The site is data-driven: all copy, people, links and images come from
 * the JSON files in /content. Components import from here, never hardcode.
 * Each source field carries a `tag` ("real" | "real-sampled" | "approximate"
 * | "dummy") — see /content/README.md.
 */
import siteData from "../../content/site.json";
import resourcesData from "../../content/resources.json";
import emergencyData from "../../content/emergency.json";
import aboutData from "../../content/about.json";
import visionMissionData from "../../content/vision-mission.json";
import responsibilitiesData from "../../content/responsibilities.json";
import welfareData from "../../content/welfare.json";
import campusLifeData from "../../content/campus-life.json";
import initiativesData from "../../content/initiatives.json";
import teamData from "../../content/team.json";
import galleryData from "../../content/gallery.json";
import faqData from "../../content/faq.json";
import contactData from "../../content/contact.json";

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteContent {
  name: { value: string };
  parentInstitute: { value: string };
  tagline: { value: string };
  motto: { value: string };
  logo: { institute: string };
  nav: { items: NavItem[] };
}

export interface LinkItem {
  label: string;
  href: string;
  tag?: string;
}

export interface ResourceGroup {
  name: string;
  items: LinkItem[];
}

export interface ResourcesContent {
  heading: string;
  intro: { value: string };
  groups: ResourceGroup[];
}

export interface EmergencyContact {
  label: string;
  value: string;
  email?: string;
  tag?: string;
  placeholder?: boolean;
}

export interface EmergencyContent {
  heading: string;
  note: { value: string };
  contacts: EmergencyContact[];
}

export interface TextValue {
  value: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface AboutContent {
  heading: string;
  lead: TextValue;
  body: TextValue[];
  stats: Stat[];
}

export interface ValueItem {
  title: string;
  body: string;
}

export interface VisionMissionContent {
  vision: string;
  mission: string[];
  values: ValueItem[];
}

export interface ResponsibilityItem {
  icon: string;
  title: string;
  body: string;
}

export interface ResponsibilitiesContent {
  heading: string;
  intro: TextValue;
  items: ResponsibilityItem[];
}

export interface WelfareProgram {
  title: string;
  body: string;
  link?: string;
}

export interface WelfareContent {
  heading: string;
  intro: TextValue;
  programs: WelfareProgram[];
}

export interface Fest {
  name: string;
  type: string;
  blurb: string;
  image: string;
  link?: string;
}

export interface CampusClubs {
  technical: string[];
  cultural: string[];
}

export interface CampusArea {
  title: string;
  body: string;
  image: string;
}

export interface CampusLifeContent {
  heading: string;
  intro: TextValue;
  fests: Fest[];
  clubs: CampusClubs;
  areas: CampusArea[];
}

export interface InitiativeItem {
  title: string;
  year: string;
  body: string;
  icon: string;
}

export interface InitiativesContent {
  heading: string;
  intro: string;
  items: InitiativeItem[];
}

export interface ContactContent {
  heading: string;
  intro: TextValue;
  office: TextValue;
  address: { lines: string[] };
  email: TextValue;
  phone: { value: string; note?: string };
  hours: TextValue;
  map: { embedQuery: string };
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqContent {
  heading: string;
  items: FaqItem[];
}

export interface GalleryItem {
  local: string;
  remoteUrl: string;
  caption: string;
}

export interface GalleryCategory {
  name: string;
  items: GalleryItem[];
}

export interface GalleryContent {
  heading: string;
  intro: TextValue;
  categories: GalleryCategory[];
}

export interface TeamMember {
  order: number;
  role: string;
  name: string;
  photo: string;
  email: string;
  blurb: string;
}

export interface TeamContent {
  heading: string;
  intro: TextValue;
  members: TeamMember[];
}

export const site = siteData as unknown as SiteContent;
export const resources = resourcesData as unknown as ResourcesContent;
export const emergency = emergencyData as unknown as EmergencyContent;
export const about = aboutData as unknown as AboutContent;
export const visionMission = visionMissionData as unknown as VisionMissionContent;
export const responsibilities =
  responsibilitiesData as unknown as ResponsibilitiesContent;
export const welfare = welfareData as unknown as WelfareContent;
export const campusLife = campusLifeData as unknown as CampusLifeContent;
export const initiatives = initiativesData as unknown as InitiativesContent;

export const gallery = galleryData as unknown as GalleryContent;
export const faq = faqData as unknown as FaqContent;
export const contact = contactData as unknown as ContactContent;

const teamContent = teamData as unknown as TeamContent;
/** Members sorted by `order` so positions stay swappable via data alone. */
export const team: TeamContent = {
  ...teamContent,
  members: [...teamContent.members].sort((a, b) => a.order - b.order),
};
