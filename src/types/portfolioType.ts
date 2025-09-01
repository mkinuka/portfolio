import type { JSX, ReactNode } from "react";

export type PortfolioItemType = {
  id: number;
  title: ReactNode;
  imgUrl: string[];
  description: JSX.Element;
};
export type PortfolioArray = PortfolioItemLangType[];

export type Language = "sv" | "eng";

export type PortfolioItemLangType = {
  sv: PortfolioItemType;
  eng: PortfolioItemType;
};
