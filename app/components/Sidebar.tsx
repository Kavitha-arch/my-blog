import { ReactNode } from "react";
import styles from "./Sidebar.module.css";

type SidebarProps = {
    title?: string;
    children: ReactNode;
    color?: "red" | "green";
};

export default function Sidebar({ title, children, color = "green" }: SidebarProps) {

    const colorClass = color === "red" ? styles.red : "";
    return (
    <aside className={`${styles.sidebar} ${colorClass}`}>
        {title && <h3>{title}</h3>}
        {children}
    </aside>
  );
}
