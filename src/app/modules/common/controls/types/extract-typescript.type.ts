import { HtmlInputType, HtmlInputTypescriptMapType } from ".";

export type ExtractTypescriptType<T extends HtmlInputType> = HtmlInputTypescriptMapType[T];