import React from "react";

import styles from "./Loader.module.scss";
import { Size } from "@/types/Size";
import clsx from "clsx";

export interface LoaderProps {
  size?: Size;
  color?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { size = "m", color, className } = props;
  const loaderStyle = color
    ? ({ "--loader-color": color } as React.CSSProperties)
    : undefined;
  return (
    <div
      className={clsx(styles.loader, styles[size], className)}
      style={loaderStyle}
      aria-label="Loading"
    >
      <span className={styles.dot} />
      <span className={styles.dot} />
      <span className={styles.dot} />
    </div>
  );
};
