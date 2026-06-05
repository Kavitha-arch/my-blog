import verse1 from "./verse1";
import verse2 from "./verse2";
import verse3 from "./verse3";

export type Verse = {
  slug: string;
  title: string;
  description: string;
  sanskrit: string;
  meaning: string[];
  symbols: string[];
  reflection: string;
  image1: string;
  image2: string;
  symbology?: string; //optional
  scenario?: string; //optional
};

export const verses: Record<string, Verse>  = {
  "verse-1": verse1,
  "verse-2": verse2,
  "verse-3": verse3,
} as const;

export const verseOrder: VerseSlug[] = [
  "verse-1",
  "verse-2",
  "verse-3",
];
 
export type VerseSlug = keyof typeof verses;

 