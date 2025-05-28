interface InputErrorMessageProps {
	message: string;
}

export function InputErrorMessage({ message }: InputErrorMessageProps) {
	return (
		<span>{message}</span>
	)
}