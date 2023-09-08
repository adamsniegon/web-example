import { RegisterOptions } from "react-hook-form"
import { IQuickFormFields, IFormFields } from "@types";
import content from "@content.json";

const { empty: nameEmpty } = content.form.fields.name.error;
const { empty: emailEmpty, format: emailFormat } = content.form.fields.email.error;
const { format: phoneFormat } = content.form.fields.phone.error;
const { empty: messageEmpty } = content.form.fields.message.error;

export const validationSchema: { [key in keyof IQuickFormFields | keyof IFormFields]: RegisterOptions } = {
    name: {
        required: {
            value: true,
            message: nameEmpty
        }
    },
    company: {
        required: false
    },
    email: {
        required: {
            value: true,
            message: emailEmpty
        },
        pattern: {
            value: /^[\w\-\.]+@[\w-]+\.+[\w-]{2,4}$/m,
            message: emailFormat
        }
    },
    phone: {
        required: false,
        pattern: {
            value: /^([\+][\s]?[0-9]{1,3}[\s]?)?[0-9\s]{6,14}$/i,
            message: phoneFormat
        }
    },
    message: {
        required: {
            value: true,
            message: messageEmpty
        }
    }
}