"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import content from "@content.json";
import styles from "./navigation.module.scss";

export default function Navigation() {
    const [open, setOpen] = useState<boolean>(false);
    const { navigation } = content;

    const toggleNavigation = (e: React.MouseEvent<SVGElement>) => {
        e.preventDefault();
        setOpen(state => !state);
    }

    return (
        <nav className={styles["navigation"]}>
            {!open ?
                <svg className={styles["navigation__icon"]} onClick={toggleNavigation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
                :
                <svg className={styles["navigation__icon"]} onClick={toggleNavigation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -960 960 960">
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            }
            <ul className={`${styles["navigation__list"]} ${open ? styles["navigation__list--open"] : ""}`}>
                {Object.entries(navigation).map(([key, value]) => (
                    <li key={key} className={`${styles["navigation__item"]} ${styles["navigation__item--" + key]}`}>
                        <Link className={styles["navigation__link"]} smooth to={key} offset={key === "home" ? -200 : 0}>{value}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
