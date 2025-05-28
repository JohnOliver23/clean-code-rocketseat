import { InputHTMLAttributes } from "react"

type FormFieldProps = InputHTMLAttributes<HTMLInputElement>

export function InputFormField(props: FormFieldProps) {
	return (
		<input {...props} />
	)
}