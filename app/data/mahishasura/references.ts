
export interface ReferenceEntry {
  website: string;
  text: string;
  description?: string;
  referenced?:boolean;
  toRead:boolean;
}

export const references:ReferenceEntry[]=[
  {
    website: "https://www.holy-bhagavad-gita.org/chapter/7/verse/14/",
    text: "SBG",
    description: "Text explains Bhagvath Gita",
    referenced:false,
    toRead:true,
  },
  
];