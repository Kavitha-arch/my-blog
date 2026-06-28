
export interface ReferenceEntry {
  website: string[];
  text: string;
  description?: string[];
  referenced?: boolean;
  toRead: boolean;
}

export const references: ReferenceEntry[] = [
  {
    website: ["https://www.holy-bhagavad-gita.org/chapter/7/verse/14/"],
    text: "Srimad Bhagavad Gita",
    description: [
      " My divine energy Maya, consisting of the three modes of nature, is very difficult to overcome. But those who surrender unto Me cross over it easily.॥",
      "दैवी ह्येषा गुणमयी मम माया दुरत्यया ।",
      "मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते ॥ 14॥",
    ],
    referenced: false,
    toRead: true,
  },
  {
    website: ["https://www.hinduwebsite.com/hinduism/h_advaita.asp"],
    text: "Advaita",
    description: [" I am other than name, form and action.<br/> My nature is ever free! <br/>I am Self, the supreme unconditioned Brahman.<br/> I am pure Awareness, always non-dual.  "],
    referenced: false,
    toRead: true,
  },
  {
    website: ["https://archive.org/details/upadesa-sahasri-with-english-translation-swami-jagadananda-1949-rkm",
      "https://vedantastudents.com/wp-content/uploads/2018/10/07-Upadesa-Sahasri-Volume-6.pdf",
    ],
    text: "Updesa Sahasri",
    description: [
      "Those who think themselves to be one with Brahman and at the same time to be doers and experiencers should be regarded as fallen from both Know‘ledge and duties. They are, no doubt, unbelievers (in the Vedas).",

      "धर्माधमफटेर्योग इष्टोऽदष्टो यथात्मनः |",
      "शाखाद्रद्यत्वमप्यस्य मोक्षो ज्ञानात्तथेष्यताम्‌ ॥ ९ ॥   "
    ],
    referenced: false,
    toRead: true,
  },

];