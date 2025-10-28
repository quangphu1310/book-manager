export interface BookListItem {
  id: number;
  title: string;
  author: string;
  year: number;
  price: number;
  thumbnailUrl?: string;
}

export interface BookDetail {
  id: number;
  title: string;
  author: string;
  year: number;
  price: number;
  thumbnailUrl?: string;
}