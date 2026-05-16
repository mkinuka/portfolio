export type WorklifeExpType = {
  id: number;
  title: string;
  company: string;
  period: string;
  location?: string;
  responsibilities?: string[];
  description?: string;
};

export type WorklifeExpLangType = {
  sv: WorklifeExpType;
  eng: WorklifeExpType;
};