import { LabelHTMLAttributes } from "react";

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    title: string;
}

export function InputLabel(props: InputLabelProps) {
    return (
        <label {...props}>{props.title}</label>
    )
}