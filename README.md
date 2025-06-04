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

### Parâmetros e desestruturação

- Sempre que possível receber e enviar parâmetros nomeados
- Sempre que possível prefira receber objetos como parâmetro da função
- Muitas vezes faz mais sentido a resposta da função ser objeto

### Números mágicos

- Sempre que possível, ao criar intervalos , fazer as operações diretamente no código e atribuir a uma variável
- Sempre que possível, nomear os parâmetros de acordo com o formato que a gente as recebe
  ex: priceInCents, discountAmountInPercentage

### Comentários vs. Documentação

- O comentário não serve para explicar o funcionamento de algo, isto é responsabilidade da Documentação.
- O comentário serve como um aviso ao próximo desenvolvedor do motivo daquele código ter sido escrito daquela forma, seja por alguma limitação/problema de biblioteca ou para avisar de uma padrão diferente de escrita.

### Evite Syntatic Sugars

- Syntatic Sugars são estruturas/funcionalidades que geralmente são muito específicas à determinada linguagem, por exemplo, a desestruturação e o spread operator (...) do JavaScript, ou métodos de conversão de tipo de variáveis.
- O recomendado é utilizar soluções "genéricas" quando possível, desde que não aumente a complexidade do código e nem diminua sua produtividade, porque dessa forma o próximo programador não necessitaria de um alto grau de conhecimento da linguagem para entender e fazer a manutenção do código.

## Código limpo com React

### Desacoplando componentes

Quando separar componentes em componentes menores ?

**1. Quando eu tenho algo repetitivo:**  
Analisar necessidade de separação, muitas vezes não é necessário quando a estrutura se repete, mas não tem nenhuma lógica envolvida.  
Essa análise evita o excesso de componentização em um projeto.

**2. Quando consigo isolar algo do seu contexto (sem prejudicar o comportamento original):**  
Quando existe alguma variável, função, `useEffect`, etc. que está totalmente associada à uma parte específica da interface.

### Componentes puros

Quando se separa um componente em outros menores, é muito comum que se leve toda a lógica do script para o componente novo e às vezes essa lógica depende de comunicação com API/back-end, useEffect() em variáveis do componente pai, entre outros, nesses casos o componente criado não é um componente puro e sim um componente separado em dois arquivos.

Componente puro é um tipo de componente cuja existência não depende do contexto em que está, ele tem autonomia de funcionamento sem precisar de informações externas, desde que respeitadas suas propriedades.

Exemplo: o Header de uma aplicação contém um botão com uma função que adiciona uma nota em uma lista de notas, para ele se tornar um componente puro o correto seria criar uma interface que recebe justamente esta função a ser utilizada, assim o Header pode exister em qualquer outro contexto da aplicação desde que seja passado alguma função para ser executada no botão.

### Funções e eventos no React

Recomendação de prefixos para nomes de funções: `handle` e `on`.

Sempre que for criar uma função dentro do um componente e essa função é uma função disparada através de um evento do usuário como `click` `submit` é recomendado prefixar essa função com `handle` por ex: `handleCreateUser` `handleSubmitForm`

Quando eu crio um componente e esse componente precisa receber uma função que é disparada a partir de um evento do usuário é recomendado iniciar essas funções com o prefixo `on` ex: `onCreateUser` `onSubmitForm`

### Composição vs Customização

#### 🧩 Refatorando Inputs com Pattern Composition

##### 📌 Problemas do componente tradicional (`InputOld`)

```tsx
<InputOld
  label="Nome"
  errorMessage="Digite seu nome corretamente!"
  icon={<div />}
/>
```

##### 🧩 Por que `InputOld` não escala bem?

##### ❌ Problemas do componente monolítico

- **Responsabilidades misturadas**  
  Junta `label`, `ícone`, `input` e `mensagem de erro` em um único componente.

- **Pouca reutilização**  
  Não é possível reutilizar partes individuais como apenas a `label` ou o `input`.

- **Estrutura rígida**  
  Mesmo que você não use `ícone` ou `label`, o componente ainda renderiza espaço reservado para eles.

- **Baixa flexibilidade**  
  Para variações simples, como trocar o ícone de lado, é necessário adicionar novas props como `rightIcon`.

- **Estilização limitada**  
  Difícil aplicar `className`, `id` ou outras props específicas em partes internas sem criar novas props externas.

- **Manutenção difícil**  
  Qualquer alteração pequena exige lógica condicional e reestruturação do componente inteiro.

- **Código duplicado**  
  Para criar variações como `Input com erro acima`, `Input sem ícone`, etc., é necessário duplicar ou criar novos componentes.

---

#### ✅ Solução com Pattern Composition

A composição de componentes resolve esses problemas ao dividir responsabilidades em blocos reutilizáveis e independentes:

```tsx
<Input.Root>
  <Input.Label title="Nome" />
  <Input.FormField />
  <Input.Icon>
    <span />
  </Input.Icon>
</Input.Root>
```

##### 🧠 Como funciona?

- **Input.Root**: Container principal que agrupa todos os subcomponentes.
- **Input.Label**: Representa o rótulo do campo.
- **Input.FormField**: Campo de input propriamente dito.
- **Input.Icon**: Wrapper para ícones; a posição do ícone é definida pela ordem dos subcomponentes.

##### 📦 Exemplos

- **Ícone à direita**:

```tsx
<Input.Root>
  <Input.Label title="Nome" />
  <Input.FormField />
  <Input.Icon>
    <span />
  </Input.Icon>
</Input.Root>
```

- **Ícone à esquerda**:

```tsx
<Input.Root>
  <Input.Label title="Nome" />
  <Input.Icon>
    <span />
  </Input.Icon>
  <Input.FormField />
</Input.Root>
```

##### 🎯 Vantagens

- ✅ **Reutilizável:** Componentes individuais podem ser usados separadamente
- ✅ **Flexível:** Ordem dos elementos definida na composição
- ✅ **Personalizável:** Cada parte aceita suas próprias props
- ✅ **Manutenção fácil:** Alterações são localizadas
- ✅ **Escalável:** Fácil criar variações reutilizando blocos

### Condicionais no render

Evite condicionais na camada HTML de seu código, prefira criar variáveis com o condicional na camada JavaScript.

É recomendado deixar a camada HTML o menos dependente de operações javascript possível

## Código limpo no Node.js

### Clean code no back-end

Clean code no back-end não depende se a aplicação foi desenvolvida com Clean Architeure, DDD (Domain Driven Design), SOLID ou frameworks, etc.

O objetivo é ter uma aplicação muito bem estruturada, definida e principalmente com diversos testes automatizados que auxliam no desenvolvimento do sistema para garantir que a aplicação continue funcionando corretamente mesmo com novas features e refatorações sendo feitas.

Foco principal:

- Manter os testes simples
- Testes que cubram quase toda a aplicação

### SOLID

- SRP: Single reponsabilitily Principle
- OCP: Open/Close Principle
- LSP: Liskov Substitution Principle
- ISP: Interface Segregation Principle
- DIP: Dependency Inversion Principle

SRP: cada classe, entidade, serviço, método, caso de uso, em suma, cada parte da aplicação deve ser responsável por uma única ação.
Exemplo que fere o princípio: um método que cria um usuário E envia um e-mail para este usuário, o correto seriam funções separadas.

OCP: as classes/entidades devem estar sempre "abertas" a extensão/inclusão de novos métodos, mas nunca permitir a modificação de um já existente.
Exemplo que fere o princípio: uma classe com uma função que calcula valor de frete de forma diferente de acordo com as transportadoras, caso a empresa faça um contrato com uma nova transportadora, será preciso alterar a classe e adicionar mais um condicional, o correto seria estendar a classe para permitir esta nova transportadora.

LSP: deve ser possível substituir uma dependência de uma classe por outra desde que elas possuam o mesmo formato. Exemplo que respeita o princípio: uma função que envia os dados de criação de um usuário para um repositório do banco PostgreSQL deve continuar funcionando caso troque o repositório para um do MySQL, a função não é responsável por mandar um formato específico de dados para cada banco.

ISP: instrui a separação de interfaces de classes.
Exemplo que fere o princípio: uma classe Impressora com uma interface com os métodos de imprimir e escanear, pode ocorrer de uma impressora mais simples não possuir a função de escanear, então não seria possível utilizar essa interface, o correto seria separar cada método em uma interface e aí sim a classe Impressa implementar as duas interfaces.

DIP: as dependências de uma classe devem ser injetadas de maneira inversa ao modelo tradicional, ou seja, a função deve receber como parâmetros as suas depêndencias. Exemplo que fere o princípio: em um arquivo, temos um import de um repositório, uma função createUser() utiliza o objeto desse repositório para executar a função createUserInDatabase(), o correto é declarar a função createUser() para receber uma função como parâmetro e depois passar a função createUserInDatabase() para ela.
