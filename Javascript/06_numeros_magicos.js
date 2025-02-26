setTimeout(() => {

},[2592000000])

/**
 * Pra quem tá lendo o código, esse número não faz sentido nenhum, por isso se chama número mágico
 * o número pode ser rescrito fazendo as operações diretamento no código e atribuindo a uma variável
 */

const INTERVAL_30_DAYS = 1000 * 60 * 60 * 24 * 30

setTimeout(() => {

},[INTERVAL_30_DAYS])

function calculateDiscount(price, discountAmount) {
    // retorna disconto
}

/**
 * Uma boa prática seria nomear os parâmetros de acordo com o formato que a gente as recebe
 */


function calculateDiscount(priceInCents, discountAmountInPercentage) {
    // retorna disconto
}


/**
 * Agora fica muito mais claro saber que os parâmetros estão em um formato específico
 */