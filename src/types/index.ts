export type { MetaConfig, MetaProps, Routes } from "./meta.types";
export type { ApiResponse, IContact, IMeta } from "./api.types";

export type {
  Children,
  DivProps,
  ElementProps,
  IGlobalError,
  Params,
  SearchParams,
  SectionProps,
} from "./react.types";

export interface IModal {
  open: boolean;
  setOpen: (open: boolean) => void;
}
