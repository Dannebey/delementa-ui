import { ReactNode, forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

import styles from "./Button.module.scss";
import { Size } from "@/types/Size";
import { Loader } from "../Loader/Loader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size: Size;
  variant: "primary" | "outline" | "text" | "link";
  icon?: ReactNode;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      label,
      onClick,
      size,
      variant,
      icon,
      loading,
      type = "button",
      className,
      disabled,
      ...rest
    } = props;

    const isDisabled = disabled || loading;

    const buttonClass = clsx(
      styles.button,
      styles[variant],
      styles[size],
      className,
    );

    return (
      <button
        ref={ref}
        type={type}
        className={buttonClass}
        onClick={onClick}
        disabled={isDisabled}
        {...rest}
      >
        {/* Контейнер с содержимым всегда рендерится */}
        <span
          className={styles.content}
          style={{ visibility: loading ? "hidden" : "visible" }}
        >
          {icon && <span className={styles.icon}>{icon}</span>}
          <span className={styles.label}>{label}</span>
        </span>
        {loading && (
          <span className={styles.loaderWrapper}>
            <Loader size={size} />
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
