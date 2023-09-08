import { ElementType } from 'react';
import { Poppins } from 'next/font/google';
import { IQuickFormFields, IFormFields, IInput } from "@types";
import styles from "./input.module.scss";

const poppins = Poppins({ subsets: ['latin'], weight: "400" });

export default function Input<T extends IQuickFormFields | IFormFields, P extends ElementType = "input" | "textarea">({ inputElement, inputStyle = "normal", error = false, registerName, register, validationSchema, ...props }: IInput<T, P>) {
    const Component = inputElement || "input";

    return (
        <Component className={`${poppins.className} ${styles["input"]} ${styles["input--" + inputStyle]} ${error ? styles["input--error"] : ""}`} {...register(registerName, validationSchema)} {...props}></Component>
    )
}
