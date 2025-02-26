function createUserController(data) {
    userRepository.create(data)
}

/**
 * Sempre que possível receber e enviar parâmetros nomeados
 * Sempre que possível prefira receber objetos como parâmetro da função
 * Muitas vezes faz mais sentido a resposta da função ser objeto
 */

function createUserController(data) {
    const {name, email, password} = data

    userRepository.create({
        name,
        email,
        password
    })
}

/**
 * Agora o código fica mais legível e fica claro que pra criar um usuário é preciso dos params name, email e password
 */