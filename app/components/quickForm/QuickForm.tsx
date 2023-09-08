"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import Input from "@components/input/Input";
import Message from "@components/message/Message";
import Button from "@components/button/Button";
import GoogleRecaptchaNotice from "@components/googleRecaptchaNotice/GoogleRecaptchaNotice";
import { validationSchema } from "@validationSchema";
import { IForm, IQuickFormFields } from "@types";
import content from "@content.json";
import styles from "./quickForm.module.scss";

export default function QuickForm({ inputIds, formStyle = "normal", ...props }: IForm<IQuickFormFields>) {
    const [success, setSuccess] = useState(false);
    const [inputFocus, setInputFocus] = useState(false);
    const { register, formState: { errors, isSubmitting, isSubmitSuccessful, touchedFields }, setError, handleSubmit } = useForm<IQuickFormFields>();
    const { form: { button, success: successMessage, generalError, fields: { email: { label } } } } = content;

    const onSubmit: SubmitHandler<IQuickFormFields> = async ({ email }) => {
        try {
            // @ts-ignore
            grecaptcha.ready(() => {
                // @ts-ignore
                grecaptcha.execute(`${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`, { action: 'submit' })
                    // @ts-ignore
                    .then(async (token) => {
                        await axios.post(`/api/quickform`, {
                            email,
                            token: token
                        });
                        setSuccess(true);
                    });
            });
        } catch (error) {
            setError("root", { "message": generalError });
        }
    }

    return (
        <form className={styles["quickForm"]} onSubmit={handleSubmit(onSubmit)} method="POST" {...props}>
            <div className={styles["quickForm__input"]}>
                <label htmlFor={inputIds.email} style={{ color: `${formStyle === "normal" ? "var(--text)" : "var(--text-reverse)"}` }}>{label}</label>
                <Input
                    id={inputIds.email}
                    onFocus={() => setInputFocus(true)}
                    type="email"
                    inputStyle={formStyle}
                    disabled={isSubmitting || isSubmitSuccessful || errors.root !== undefined}
                    error={errors.email ? true : false}
                    registerName="email"
                    register={register}
                    validationSchema={validationSchema.email}
                />
            </div>
            <div className={styles["quickForm__message"]}>
                {errors.email && <Message messageStyle={formStyle === "normal" ? "error" : "error-reverse"}>{errors.email.message}</Message>}
                {success && <Message messageStyle={formStyle === "normal" ? "success" : "success-reverse"}>{successMessage}</Message>}
                {errors.root && <Message messageStyle={formStyle === "normal" ? "error" : "error-reverse"}>{errors.root.message}</Message>}
            </div>
            <Button className={styles["quickForm__button"]} buttonStyle={formStyle === "normal" ? "solid" : "solid-reverse"} isLoading={isSubmitting} disabled={isSubmitSuccessful || errors.root !== undefined}>{button}</Button>
            {Object.keys(errors).length === 0 && !inputFocus && <GoogleRecaptchaNotice className={styles["quickForm__googleRecaptchaNotice"]} googleRecaptchaNoticeStyle={formStyle} />}
        </form>
    )
}