//Negação
const isUserOlderThan18Years = true;
const isUserLivesOnBrazil = true;

if(!isUserOlderThan18Years && !isUserLivesOnBrazil) {

}

/**
 * Pontos a serem melhorados:
 * Evite sempre negações, negações são sempre mais difíceis de ser lidas
 * Transcrever o código de maneira que a variável possa ser lida ao contrário é bem melhor
 */

const isUserYoungerThan18Years = true;
const doesUserLivesOutsideBrazil = true;

if(isUserOlderThan18Years && isUserLivesOnBrazil) {

}

/**
 * Nossa condicional ficou mais simples
 * Sempre que possível escreva condicionais sem negação
 * Tentar escrever outras variáveis de forma que nossas condicionais não precisem de negação
 */

//Early return vs else

function isUserOlderThan18Years(user) {
    if(!user) {
        return {error: true}
    } else {
        return user.age >= 18
    }
}

/**
 * Sempre que possível evite elses e prefira o uso do early return
 */

function isUserOlderThan18Years(user) {
    if(!user) {
        return {error: true}
    }

    return user.age >= 18
}
/**
 * Sempre que possível evite condições aninhadas
 */