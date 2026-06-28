import mantra from "./mantra";
import verse1 from "./verse1";
import verse10 from "./verse10";
import verse11 from "./verse11";
import verse2 from "./verse2";
import verse3 from "./verse3";
import verse4 from "./verse4";
import verse5 from "./verse5";
import verse6 from "./verse6";
import verse7 from "./verse7";
import verse8 from "./verse8";
import verse9 from "./verse9";

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
  audio?: string;
};

export const verses: Record<string, Verse> = {
  "verse-0": mantra,
  "verse-1": verse1,
  "verse-2": verse2,
  "verse-3": verse3,
  "verse-4": verse4,
  "verse-5": verse5,
  "verse-6": verse6,
  "verse-7": verse7,
  "verse-8": verse8,
  "verse-9": verse9,
  "verse-10": verse10,
  "verse-11": verse11,
} as const;

export const verseOrder: VerseSlug[] = [
  "verse-0",
  "verse-1",
  "verse-2",
  "verse-3",
  "verse-4",
  "verse-5",
  "verse-6",
  "verse-7",
  "verse-8",
  "verse-9",
  "verse-10",
  "verse-11",
];

export type VerseSlug = keyof typeof verses;

