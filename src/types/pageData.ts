export type BookSideData = {
  isBlank?: boolean;
  image?: string;
  imageAlt?: string;
  svTitle?: string;
  svCompany?: string;
  svLocation?: string;
  svPeriod?: string;
  svDescription?: string;
  svResponsibilities?: string[];
  engTitle?: string;
  engCompany?: string;
  engLocation?: string;
  engPeriod?: string;
  engDescription?: string;
  engResponsibilities?: string[];
};

export type PageData = {
  front: BookSideData;
  back: BookSideData;
};