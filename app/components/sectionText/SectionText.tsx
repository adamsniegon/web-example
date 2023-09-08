import { ISectionText } from "@types";
import styles from "./sectionText.module.scss";

export default function SectionText({ children, className, align = "left", ...props }: ISectionText) {
    return (
        <div className={styles["sectionText--" + align]}>
            <div className={`${styles["sectionText__inner"]} ${className}`} {...props}>
                {children}
            </div>
        </div>
    )
}