"use client";

import Logo from "@components/logo/Logo";
import Navigation from "@components/navigation/Navigation";
import Button from "@components/button/Button";
import content from "@content.json";
import styles from "./header.module.scss";
import { Link } from "react-scroll";

export default function Header() {
    const { action } = content;

    return (
        <div className={styles["header"]}>
            <Logo />
            <div className={styles["header__group"]}>
                <Link smooth to={"contact"}>
                    <Button className={styles["header__button"]} buttonStyle="outline">{action}</Button>
                </Link>
                <Navigation />
            </div>
        </div>
    )
}