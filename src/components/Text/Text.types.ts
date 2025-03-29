import { ElementType, HTMLAttributes, ReactNode } from "react";

export type TextVariant =
  | "display-xl"
  | "display-lg"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body-md"
  | "body-sm"
  | "caption"
  | "overline";

export type TextAlign = "left" | "center" | "right" | "justify";
export type TextWeight = "regular" | "medium" | "semibold" | "bold";

export const TEXT_DEFAULTS = {
  VARIANT: "body-md" as TextVariant,
  TRUNCATE: false,
  GUTTER_BOTTOM: false,
  NO_WRAP: false,
};

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Текстовое содержимое */
  children: ReactNode;
  /** Вариант типографики (по умолчанию: "body-md") */
  variant?: TextVariant;
  /** HTML элемент, который будет использован */
  component?: ElementType;
  /** Цвет текста */
  color?: string;
  /** Выравнивание текста */
  align?: TextAlign;
  /** Насыщенность шрифта */
  weight?: TextWeight;
  /** Обрезать текст с многоточием (по умолчанию: false) */
  truncate?: boolean;
  /** Добавить нижний отступ (по умолчанию: false) */
  gutterBottom?: boolean;
  /** Запретить перенос текста (по умолчанию: false) */
  noWrap?: boolean;
  /** Дополнительные ARIA-атрибуты для доступности */
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-hidden"?: boolean;
  "aria-live"?: "off" | "assertive" | "polite";
  "aria-atomic"?: boolean;
}
