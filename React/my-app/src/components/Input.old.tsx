import { ReactNode } from "react"

interface InputProps {
	label?: string;
	leftIcon?: ReactNode;
	icon?: ReactNode;
	errorMessage?: string;
}
{/** Problemas:
		1. Junta muitas responsabilidades em um só lugar, dificultando a reutilização, personalização e manutenção.
		2. Se você quiser um input sem ícone ou sem label, o componente ainda carrega a estrutura para isso.
		3. Se precisar trocar a posição do leftIcon vou precisar criar outra propriedade rightIcon
		4. Pra adicionar uma propriedade específica pra label por ex: class, id seria necessária criar mais props
		5. pra estilizar o errorMessage, você precisa alterar o próprio componente.
		6. Se quiser usar só a label ou só a mensagem de erro em outro lugar, não consegue sem duplicar lógica.
*/}

export function InputOld({label, leftIcon, icon, errorMessage}: InputProps) {
	return (
		<div>
			{label ? <label>{label}</label> : null}
			{leftIcon}
			<input type="text" />
			{icon}

			{errorMessage ? <span>{errorMessage}</span> : null}
		</div>
	)
}