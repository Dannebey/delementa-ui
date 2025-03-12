import { forwardRef, InputHTMLAttributes, useReducer } from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";
import { Size } from "@/types/Size";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { InputType, InputVariant } from "./Input.types";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  variant?: InputVariant;
  type: InputType;
  size?: Size;
  error?: boolean;
  errorMessage?: string;
  hiddenCounter?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    variant = "primary",
    error,
    className,
    errorMessage,
    type = "text",
    size = "m",
    hiddenCounter = false,
    disabled,
    ...otherProps
  } = props;

  const [isPasswordVisible, togglePasswordVisible] = useReducer(
    (v) => !v,
    false,
  );

  const inputType = type === "password" && isPasswordVisible ? "text" : type;
  const passwordIcon = isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />;
  const arialLabel = isPasswordVisible ? "Скрыть пароль" : "Показать пароль";

  const inputClass = clsx(
    styles.input,
    styles[variant],
    styles[size],
    { [styles.error]: error },
    { [styles.hiddenCounter]: hiddenCounter },
    className,
  );

  const labelStyle = clsx(
    styles.label,
    styles[size],
    { [styles.error]: error },
    { [styles.disabled]: disabled },
  );
  const errorMessageStyle = clsx(styles.errorMessage, styles[size], {
    [styles.error]: error,
  });

  return (
    <div className={styles.inputWrapper}>
      {label && <span className={labelStyle}>{label}</span>}
      <input
        ref={ref}
        className={inputClass}
        disabled={disabled}
        type={inputType}
        {...otherProps}
      />
      {type === "password" && (
        <span
          className={styles.icon}
          onClick={togglePasswordVisible}
          aria-label={arialLabel}
          role="button"
          tabIndex={0}
        >
          {passwordIcon}
        </span>
      )}
      {error && errorMessage && (
        <span className={errorMessageStyle}>{errorMessage}</span>
      )}
    </div>
  );
});

Input.displayName = "Input";
