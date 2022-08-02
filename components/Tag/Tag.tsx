import { PProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";

export const Tag = ({
  size = "middle",
  children,
  color = "ghost",
  href,
  className,
  ...props
}: PProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size == "small",
        [styles.middle]: size == "middle",
        [styles.ghost]: color == "ghost",
        [styles.red]: color == "red",
        [styles.gray]: color == "gray",
        [styles.green]: color == "green",
        [styles.primary]: color == "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
