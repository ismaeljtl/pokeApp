import React from "react";
import styles from "./badge.module.scss";

const Badge: React.FC<{
  children: React.ReactNode;
  text: string;
  color?: string;
}> = ({ children, text, color = "secondary" }) => {
  return (
    <span className={`${styles.badge} badge rounded-pill text-bg-${color}`}>
      {children}
      {text}
    </span>
  );
};

export default Badge;
