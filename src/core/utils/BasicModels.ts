export type UUID = string;
export type ISODateString = string;

export type Locales = 'en' | string;

export interface PageDTO<T> {
  readonly content: ReadonlyArray<T>;
  readonly first: boolean;
  readonly last: boolean;
  readonly number: number;
  readonly number_of_elements: number;
  readonly size: number;
  readonly total_elements: number;
  readonly total_pages: number;
}

export interface IListMeta {
  title: string;
  service: string;
  searchPlaceholder: string;
  tabs?: any[];
  listingSummaryCount?: boolean;
  right?: any;
}
