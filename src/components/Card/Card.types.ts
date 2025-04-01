import { HTMLAttributes, ReactNode } from "react";
import { Size } from "@/types/Size";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "outlined" | "flat";
  hoverable?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  padding?: "none" | Size;
  radius?: "none" | Size;
  backgroundColor?: string;
  border?: string;
  shadow?: "none" | Size;
}

export interface CardHeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  subtitle?: ReactNode;
  avatar?: ReactNode;
  action?: ReactNode;
  align?: "left" | "center" | "right";
}

export interface CardMediaProps extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  alt?: string;
  height?: number | string;
  component?: "img" | "video" | "iframe";
  objectFit?: "cover" | "contain" | "fill";
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "none" | Size;
  maxHeight?: number | string;
  overflow?: "auto" | "hidden" | "visible";
}

export interface CardActionsProps extends HTMLAttributes<HTMLDivElement> {
  align?: "left" | "center" | "right";
  spacing?: Size;
  direction?: "row" | "column";
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}
