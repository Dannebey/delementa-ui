import { ElementType, forwardRef, memo, useMemo } from "react";
import clsx from "clsx";

import styles from "./Text.module.scss";
import { TextProps, TextVariant, TEXT_DEFAULTS } from "./Text.types";

/**
 * Определяет HTML-элемент по умолчанию на основе варианта типографики
 * @param variant - вариант типографики
 * @returns ElementType - HTML-элемент
 */
const getDefaultComponent = (variant?: TextVariant): ElementType => {
  if (!variant) {
    return "p";
  }

  if (variant.startsWith("h")) {
    return variant as ElementType; // h1-h6
  }

  if (variant.startsWith("display")) {
    return "h1";
  }

  if (variant === "overline" || variant === "caption") {
    return "span";
  }

  return "p"; // body-* по умолчанию
};

export const Text = memo(
  forwardRef<HTMLElement, TextProps>((props, ref) => {
    const {
      children,
      variant = TEXT_DEFAULTS.VARIANT,
      component,
      color,
      align,
      weight,
      truncate = TEXT_DEFAULTS.TRUNCATE,
      gutterBottom = TEXT_DEFAULTS.GUTTER_BOTTOM,
      noWrap = TEXT_DEFAULTS.NO_WRAP,
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-hidden": ariaHidden,
      "aria-live": ariaLive,
      "aria-atomic": ariaAtomic,
      ...rest
    } = props;

    const Component = useMemo(() => component || getDefaultComponent(variant), [component, variant]);

    const textClass = clsx(
      styles.text,
      variant && styles[variant],
      align && styles[`align-${align}`],
      weight && styles[`weight-${weight}`],
      {
        [styles.truncate]: !!truncate,
        [styles.gutterBottom]: !!gutterBottom,
        [styles.noWrap]: !!noWrap,
      },
      className
    );

    // Добавляем роль для улучшения доступности, если это не стандартный HTML-элемент
    const ariaProps: Record<string, string | boolean> = {};

    // Проверяем, является ли компонент нестандартным HTML-элементом
    if (component && typeof component === "string" && !component.match(/^(h[1-6]|p|span|div)$/)) {
      ariaProps.role = "text";
    }

    // Добавляем aria-атрибуты, если они определены
    if (ariaLabel) ariaProps["aria-label"] = ariaLabel;
    if (ariaLabelledby) ariaProps["aria-labelledby"] = ariaLabelledby;
    if (ariaHidden !== undefined) ariaProps["aria-hidden"] = ariaHidden;
    if (ariaLive) ariaProps["aria-live"] = ariaLive;
    if (ariaAtomic !== undefined) ariaProps["aria-atomic"] = ariaAtomic;

    // Оптимизированное формирование стилей
    const style = useMemo(() => {
      return color ? { color, ...rest.style } : rest.style;
    }, [color, rest.style]);

    // Проверка на наличие дочерних элементов
    const hasChildren = children !== undefined && children !== null && children !== "";

    // data-атрибуты для тестирования
    const dataAttributes = {
      "data-variant": variant,
      "data-component": typeof Component === "string" ? Component : undefined,
    };

    return (
      <Component ref={ref} className={textClass} style={style} {...ariaProps} {...dataAttributes} {...rest}>
        {hasChildren ? children : null}
      </Component>
    );
  })
);

Text.displayName = "Text";
