import React, { ReactNode } from "react";
import styles from "./BlogLayout.module.css";

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return <article className={styles.container}>{children}</article>;
}
