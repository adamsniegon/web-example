import { Poppins } from 'next/font/google';
import { IButton } from "@types";
import styles from "./button.module.scss";

const poppins = Poppins({ subsets: ['latin'], weight: "400" });

export default function Button({children, className, buttonStyle = "solid", isLoading = false, disabled, ...props}: IButton) {
    return (
        <button className={`${poppins.className} ${styles["button"]} ${styles["button--" + buttonStyle]} ${isLoading ? styles["button--loading"] : ""} ${className}`} disabled={disabled} {...props}>
            {isLoading && <span className={styles["button__loader"]}></span>}
            {children}
        </button>
    )
  }
  