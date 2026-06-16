import mantra from "./mantra";
import verse1 from "./verse1";
import verse2 from "./verse2";
import verse3 from "./verse3";
import verse4 from "./verse4";
import verse5 from "./verse5";

export type Verse = {
  slug: string;
  title: string;
  description: string;
  sanskrit: string;
  meaning: string[];
  symbols?: string[];
  reflection: string[];
  philosophy?: string[];
  image1: string;
  image2?: string;
  imagepnt: string;
  symbology?: string; //optional
  scenario?: string; //optional
  // Change this line to an array of objects:
  stanzaData?: {
    sanskrit: string;
    meaning: string;
  }[];
};

export const verses: Record<string, Verse> = {
  "mantra": mantra,
  "verse-1": verse1,
  "verse-2": verse2,
  "verse-3": verse3,
  "verse-4": verse4,
  "verse-5": verse5,
} as const;

export const verseOrder: VerseSlug[] = [
  "mantra",
  "verse-1",
  "verse-2",
  "verse-3",
  "verse-4",
  "verse-5",
];

export type VerseSlug = keyof typeof verses;

