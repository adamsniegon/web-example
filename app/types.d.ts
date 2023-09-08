import { ComponentPropsWithoutRef, ReactNode, CSSProperties } from "react";
import { UseFormRegister, RegisterOptions, Path } from "react-hook-form";

interface IButton extends ComponentPropsWithoutRef<"button"> {
    buttonStyle?: "solid" | "solid-reverse" | "outline" | "outline-reverse",
    isLoading?: boolean
}

interface IQuickFormFields {
    email: string
}

interface IFormFields extends IQuickFormFields {
    name: string,
    company: string,
    phone: string,
    message: string
}

interface IInputProps<T, P extends ElementType> {
    inputElement?: P,
    inputStyle?: "normal" | "reverse"
    error?: boolean,
    registerName: Path<T>,
    register: UseFormRegister<T>,
    validationSchema: RegisterOptions
}

interface IInput<T extends IQuickFormFields | IFormFields, P extends ElementType> extends ComponentPropsWithoutRef<"input">, ComponentPropsWithoutRef<"textarea">, IInputProps<T, P>, Omit<ComponentPropsWithoutRef<T>, keyof IInputProps<T, P>> {}

interface IMessage extends ComponentPropsWithoutRef<"span"> {
    messageStyle: "success" | "error" | "success-reverse" | "error-reverse"
}

interface IForm<T> extends ComponentPropsWithoutRef<"form"> {
    inputIds: {
        [key in keyof T]: string
    },
    formStyle?: "normal" | "reverse"
}

interface IAlign {
    align?: "left" | "center" | "right"
}

interface IGradientHeadline extends ComponentPropsWithoutRef<"h1">, IAlign {
    headlineStyle?: "normal" | "reverse"
}

interface IBaseProps {
    children?: ReactNode,
    className?: string,
    style?: CSSProperties
}

interface IGradientContainer extends IBaseProps, IAlign {}

interface IServiceCard extends IBaseProps {
    icon: string,
    name: string,
    list: string[]
}

interface ISectionText extends IBaseProps, IAlign {}

interface IBadge extends IBaseProps {}

interface IPortfolioCard extends IBaseProps {
    id: string,
    headline: string,
    button: string
}

interface IReferenceCard extends IBaseProps, IAlign {
    image: string,
    name: string,
    title: string,
    text: string
}

interface IInfo extends IBaseProps {
    address: string[],
    contact: string[]
}

interface ICopyright extends IBaseProps {
    children: string
}

interface ILogo extends IBaseProps {}

interface IGoogleAnalytics {
    gaMeasurmentId: string
}

interface IGoogleRecaptcha {
    recaptchaKey: string
}

interface IGoogleRecaptchaNotice extends IBaseProps {
    googleRecaptchaNoticeStyle?: "normal" | "reverse"
}