import type { JSX } from "react";

export type PortfolioItemType = {
    id: number,
    title: string;
    imgUrl: string[];
    description: JSX.Element;
};
export type PortfolioArray = PortfolioItemType[];


export type Language = "sv" | "eng";