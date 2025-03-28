import { ElementType, forwardRef, HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

import styles from "./Text.module.scss";

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

export interface TextProps extends HTMLAttributes<HTMLElement> {
  /** Текстовое содержимое */
  children: ReactNode;
  /** Вариант типографики */
  variant: TextVariant;
  /** HTML элемент, который будет использован */
  component?: ElementType;
  /** Цвет текста */
  color?: string;
  /** Выравнивание текста */
  align?: TextAlign;
  /** Насыщенность шрифта */
  weight?: TextWeight;
  /** Обрезать текст с многоточием */
  truncate?: boolean;
  /** Добавить нижний отступ */
  gutterBottom?: boolean;
  /** Запретить перенос текста */
  noWrap?: boolean;
}

export const Text = forwardRef<HTMLElement, TextProps>((props, ref) => {
  const { children, variant, component, color, align, weight, truncate, gutterBottom, noWrap, className, ...rest } = props;

  // Определяем компонент по умолчанию на основе варианта
  const Component = component || getDefaultComponent(variant);

  const textClass = clsx(
    styles.text,
    styles[variant],
    align && styles[`align-${align}`],
    weight && styles[`weight-${weight}`],
    {
      [styles.truncate]: truncate,
      [styles.gutterBottom]: gutterBottom,
      [styles.noWrap]: noWrap,
    },
    className
  );

  const style = color ? { color, ...rest.style } : rest.style;

  return (
    <Component ref={ref} className={textClass} style={style} {...rest}>
      {children}
    </Component>
  );
});

// Функция для определения HTML элемента по умолчанию на основе варианта
function getDefaultComponent(variant: TextVariant): ElementType {
  if (variant.startsWith("h")) {
    return variant as ElementType; // h1-h6
  }

  if (variant.startsWith("display")) {
    return "h1";
  }

  if (variant === "overline") {
    return "span";
  }

  if (variant === "caption") {
    return "span";
  }

  return "p"; // body-* по умолчанию
}

Text.displayName = "Text";
