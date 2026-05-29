import verse1 from "./verse1";

export const verses = {
  "verse-1": verse1,
} as const;

export type VerseSlug = keyof typeof verses;