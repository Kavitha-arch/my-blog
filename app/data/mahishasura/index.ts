import verse1 from "./verse1";
import verse2 from "./verse2";

export const verses = {
  "verse-1": verse1,
  "verse-2": verse2,
} as const;

export type VerseSlug = keyof typeof verses;