import parse from "html-react-parser";
import GradientContainer from "@components/gradientContainer/GradientContainer";
import { IServiceCard } from "@types";
import styles from "./serviceCard.module.scss";

export default function ServiceCard({ icon, name, list, ...props }: IServiceCard) {
    return (
        <div>
            <GradientContainer className={styles["serviceCard__icon-wrapper"]}>
                <div className={styles["serviceCard__icon"]}>{parse(icon)}</div>
            </GradientContainer>
            <h3 className={styles["serviceCard__headline"]}>{name}</h3>
            <ul className={styles["serviceCard__list"]}>
                {list.map(row => (
                    <li key={row}>{row}</li>
                ))}
            </ul>
        </div>
    )
}