import { PProps } from "./P.props";
import styles from "./P.module.css";
import cn from "classnames";

export const P = ({
  size = "middle",
  children,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.small]: size == "small",
        [styles.middle]: size == "middle",
        [styles.big]: size == "big",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
