import GradientHeadline from "@components/gradientHeadline/GradientHeadline";
import QuickForm from "@components/quickForm/QuickForm";
import content from "@content.json";
import styles from "./hero.module.scss";

export default function Hero() {
    const { section: { hero: { headline, text } } } = content;

    return (
        <div id="home" className={styles["hero"]}>
            <div className={styles["hero__wrapper"]}>
                <div className={`${styles["hero__line"]} ${styles["hero__line--left"]}`}></div>
                <GradientHeadline className={styles["hero__headline"]} align="center">
                    <h1>{headline}</h1>
                </GradientHeadline>
                <p className={styles["hero__text"]}>{text}</p>
                <QuickForm inputIds={{
                    email: "heroEmail"
                }} />
                <div className={`${styles["hero__line"]} ${styles["hero__line--right"]}`}></div>
            </div>
        </div>
    )
}