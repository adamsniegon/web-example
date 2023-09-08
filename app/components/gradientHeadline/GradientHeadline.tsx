import { IGradientHeadline } from "@types";
import styles from "./gradientHeadline.module.scss";

export default function GradientHeadline({ children, className, align = "left", headlineStyle = "normal", ...props }: IGradientHeadline) {
    return (
        <div className={styles["gradientHeadline--" + align]}>
            <div className={`${styles["gradientHeadline__inner"]} ${styles["gradientHeadline__inner--" + headlineStyle]} ${className}`} {...props}>
                {children}
            </div>
        </div>
    )
}
