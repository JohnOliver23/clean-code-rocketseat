export function Button () {
    const isButtonDisabled = true;

    return (
        <button disabled={isButtonDisabled}>
            {isButtonDisabled ? "Carregando" : "Enviar"}
        </button>
    )
}

/**
 * Pontos a serem melhorados:
 * - No código acima a variável foi criado com base na consequência que ela vai ter na aplicação
 * - Geralmente devemos criar nossas variáveis sempre pela causa e não do efeito
 * - Ao invés de criar a variável isButtonDisabled que é o resultado do form está sendo enviado ,
 * devemos criar isFormSubmitting 
 */

export function Button () {
    const isFormSubmitting = true;

    return (
        <button disabled={isFormSubmitting}>
            {isFormSubmitting ? "Carregando" : "Enviar"}
        </button>
    )
}

/**
 * Agora o código fica mais claro
 * Eu vou disablitar o botão, quando o form estiver sendo enviado
 * Eu vou mostrar carregando, quando o form estiver sendo enviado
 * Precisamos nomear nossas variáveis pela causa e não pelo efeito
 */