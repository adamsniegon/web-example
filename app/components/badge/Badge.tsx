import { IBadge } from "@types";
import styles from "./badge.module.scss";

export default function Badge({ children, ...props }: IBadge) {
    return (
        <span className={styles["badge"]} {...props}>{children}</span>
    )
}
