export interface Categories {
  _embedded: Embedded;
  _links: CategoriesLinks;
  page: Page;
}

export interface Embedded {
  category: Category[];
}

export interface Category {
  createdAt?: string;
  updatedAt?: string;
  id?: string;
  name?: string;
  subCategory?: null;
  currentAuditor?: string;
  _links?: CategoryLinks;
}

export interface CategoryLinks {
  self: Profile;
  category: Profile;
}

export interface Profile {
  href: string;
}

export interface CategoriesLinks {
  self: Profile;
  profile: Profile;
}

export interface Page {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}
