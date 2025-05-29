"use client"

import { useState } from 'react'

{/**
  Quando separar componentes em componentes menores ?
  1. Quando eu tenho algo repetitivo
  2. Quando consigo isolar algo do seu contexto (sem prejudicar o comportamento original)
  */}

export default function Home() {
  const [todos] = useState<string[]>([])

  // Essa variável está associada apenas ao footer da página,
  // então o recomendado seria criar um componente para o footer
  const currentYear = new Date().getFullYear()

  return (
    <div>
     {/**Recomendado componentizar em um componente Header */}
      <header>
        <h1>My new revolutionary to-do list app!</h1>

        <button onClick={() => {}}>Add new todo</button>
      </header>

      <main>
        <h2>Advantages</h2>
        <section>
          {/*
            * Essas estruturas das divs se repetem, mas no momento não há nenhuma lógica envolvida
            * Portanto não é recomendado criar componentes neste caso
            */}
          <div>
            <h3>Blazing fast</h3>
            <p>This to-do list app is insanely fast.</p>
          </div>

          <div>
            <h3>Blazing fast</h3>
            <p>Clean and flat design with no css..</p>
          </div>
        </section>


        <h2>Notes list</h2>
          <ul>
            { 
              /**
               * Evite condicionais no render,
               * Prefira defini-las na camada do JavaScript
               */
              todos.length == 0 
              ? <li>Empty notes list</li> 
              : todos.map(todo => <li key={ todo }>{ todo }</li>)
            }
          </ul>
      </main>
      
      <hr />
      {/** O recomendado e compenentizar em um componente Footer com a variável currentYear dentro dela */}
      <footer>
        Copyright &copy; John Oliver {currentYear}
      </footer>
    </div>
  )
}