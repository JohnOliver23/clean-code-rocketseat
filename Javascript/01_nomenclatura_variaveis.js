//Nomenclatura variáveis

const users  = ["Diego", "Mayke", "Rodrigo"]

const filtered = users.filter(u => {
    return u.startsWith('D')
})

/**
 * Pontos a serem melhorados:
 * - Evitar variáveis no diminutivo: u
 * - Evitar nomes simples: filtered, não deixa claro o que foi filtrado, pode
 *   ocasionar confusões caso o arquivo seja longo a constante seja importada em
 *   outro arquivo
 */

const usersStartingWithLetterD = users.filter(user => {
    return user.startsWith('D')
})

/**
 * Agora o nome da variável expecifica o seu conteúdo
 */

function getUsers() {
    const data = ["User 1", "User 2", "User 3"]

    return data
}
/**
 * Evite nomes genéricos (data, response, list, args, params)
 * Pode ocasionar confusões no futuro caso a função cresça
 */

function getUsers() {
    const users = ["User 1", "User 2", "User 3"]

    return users
}