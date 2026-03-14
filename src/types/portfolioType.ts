import type { JSX } from "react";

export type PortfolioItemType = {
  id: number;
  title: string;
  githubUrl?: string;
  imgUrl: string[];
  description: JSX.Element;
  shortDescription: string;
};
export type PortfolioArray = PortfolioItemLangType[];

export type Language = "sv" | "eng";

export type PortfolioItemLangType = {
  sv: PortfolioItemType;
  eng: PortfolioItemType;
};
