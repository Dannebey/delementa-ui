import React, { forwardRef } from "react";
import clsx from "clsx";
import styles from "./Card.module.scss";
import { CardProps, CardHeaderProps, CardMediaProps, CardContentProps, CardActionsProps, CardFooterProps } from "./Card.types";

const CardRoot = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    variant = "elevated",
    hoverable = false,
    fullWidth = false,
    padding = "m",
    radius = "m",
    shadow = "m",
    backgroundColor,
    border,
    onClick,
    className,
    children,
    style,
    ...rest
  } = props;

  const cardClasses = clsx(
    styles.card,
    styles[`variant-${variant}`],
    styles[`padding-${padding}`],
    styles[`radius-${radius}`],
    styles[`shadow-${shadow}`],
    {
      [styles.hoverable]: hoverable,
      [styles.fullWidth]: fullWidth,
      [styles.clickable]: !!onClick,
    },
    className
  );

  const cardStyles = {
    ...style,
    backgroundColor,
    border,
  };

  return (
    <div
      ref={ref}
      className={cardClasses}
      style={cardStyles}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...rest}
    >
      {children}
    </div>
  );
});

CardRoot.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>((props, ref) => {
  const { title, subtitle, avatar, action, align = "left", className, children, ...rest } = props;

  const headerClasses = clsx(styles.cardHeader, styles[`align-${align}`], className);

  return (
    <div ref={ref} className={headerClasses} {...rest}>
      {avatar && <div className={styles.avatar}>{avatar}</div>}
      <div className={styles.headerContent}>
        {title && <div className={styles.title}>{title}</div>}
        {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
      {children}
    </div>
  );
});

CardHeader.displayName = "CardHeader";

const CardMedia = forwardRef<HTMLDivElement, CardMediaProps>((props, ref) => {
  const { image, alt, height, component = "img", objectFit = "cover", className, children, style, ...rest } = props;

  const mediaClasses = clsx(styles.cardMedia, className);
  const mediaStyles = {
    ...style,
    height,
  };

  return (
    <div ref={ref} className={mediaClasses} style={mediaStyles} {...rest}>
      {image && component === "img" && <img src={image} alt={alt || ""} className={styles.mediaImage} style={{ objectFit }} />}
      {image && component === "video" && <video src={image} className={styles.mediaVideo} style={{ objectFit }} controls />}
      {image && component === "iframe" && (
        <iframe src={image} className={styles.mediaIframe} style={{ objectFit }} title={alt || "Card media"} />
      )}
      {children}
    </div>
  );
});

CardMedia.displayName = "CardMedia";

const CardContent = forwardRef<HTMLDivElement, CardContentProps>((props, ref) => {
  const { padding = "m", maxHeight, overflow, className, children, style, ...rest } = props;

  const contentClasses = clsx(styles.cardContent, styles[`padding-${padding}`], className);

  const contentStyles = {
    ...style,
    maxHeight,
    overflow,
  };

  return (
    <div ref={ref} className={contentClasses} style={contentStyles} {...rest}>
      {children}
    </div>
  );
});

CardContent.displayName = "CardContent";

const CardActions = forwardRef<HTMLDivElement, CardActionsProps>((props, ref) => {
  const { align = "left", spacing = "m", direction = "row", className, children, ...rest } = props;

  const actionsClasses = clsx(
    styles.cardActions,
    styles[`align-${align}`],
    styles[`spacing-${spacing}`],
    styles[`direction-${direction}`],
    className
  );

  return (
    <div ref={ref} className={actionsClasses} {...rest}>
      {children}
    </div>
  );
});

CardActions.displayName = "CardActions";

// Компонент CardFooter
const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const footerClasses = clsx(styles.cardFooter, className);

  return (
    <div ref={ref} className={footerClasses} {...rest}>
      {children}
    </div>
  );
});

CardFooter.displayName = "CardFooter";

// Экспорт составного компонента
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Media: CardMedia,
  Content: CardContent,
  Actions: CardActions,
  Footer: CardFooter,
});
