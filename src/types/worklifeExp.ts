import type { JSX } from "react";
import type React from "react";


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