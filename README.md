## Clean Code
Anotações a respeito do curso Clean Code da Rocketseat, com foco em clean code prático e duração total das videoaulas de aproximadamente 3h30, ministrado por Diego Fernandes.

## Fundamentos de Clean Code
### O que é ou não é Clean Code
Características de código limpo:

- Fácil leitura
- Fácil manutenção
- Previsibilidade
- Confiança

O que o código limpo não é:

- Um manual
- Organização e estrutura de pastas/arquivos
- Quantidade pequena de linhas
- Arquitetura do sistema (Clean Architecture)
- Performance mais rápida

Exemplo: um projeto com várias pastas, arquivos de 100 linhas e performance excelente pode não ser código limpo, enquanto outro projeto com uma úncia pasta e arquivos de 1000 linhas é considerado código limpo por ter as características listadas acima.

### Princípios do código limpo
- Testes automatizados para auxiliar à fácil manutenção
- Revisões de código a cada feature nova
- Refatoração de código
- Simplicidade - KISS: Keep It Simple and Stupid, não pense em soluções para problemas que ainda não existam
- Iterações curtas para facilitar testes e revisões de alterações


## Código limpo com JavaScript
### Nomenclatura de variáveis
- Evite diminutivos
- Prefira nomes longos que explicitam o significado/uso da variável
- Evite nomes genéricos

### Código limpo em booleanos
- Sempre escrever em forma de pergunta, exemplo: isLoading, isEnabled, isClosed.
- Manter o mais semântico possível

### Causa vs Efeito
 - Ao invés de criar a variável isButtonDisabled que é o resultado do form está sendo enviado ,
  devemos criar isFormSubmitting 
 - Precisamos nomear nossas variáveis pela causa e não pelo efeito

 ### Código em ingês
- Código que não está em inglês não é um código acessível
- Existem leitores de tela usados pra ler códigos e esses leitores não conseguem diferenciar duas linguagens no mesmo código
- Criar o código 100% em inglês
- Misturar inglês e português deixa seu código msnos limpo e mais difícil de entender

 ### Regras em condicionais
- Evite sempre negações, negações são sempre mais difíceis de ser lidas
- Sempre que possível escreva condicionais sem negação
- Tentar escrever outras variáveis de forma que nossas condicionais não precisem de negação
- Sempre que possível evite elses e prefira o uso do early return
- Sempre que possível evite condições aninhadas