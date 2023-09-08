import { IGradientContainer } from "@types";
import styles from "./gradientContainer.module.scss";

export default function GradientContainer({ children, className, align = "left", ...props }: IGradientContainer) {
    return (
        <div className={styles["gradientContainer--" + align]}>
            <div className={`${styles["gradientContainer__inner"]} ${className}`} {...props}>
                {children}
            </div>
        </div>
    )
}