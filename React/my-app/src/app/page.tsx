"use client"

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { useState } from 'react'

{/**
  Quando separar componentes em componentes menores ?
  1. Quando eu tenho algo repetitivo
  2. Quando consigo isolar algo do seu contexto (sem prejudicar o comportamento original)
  */}

export default function Home() {
  const [todos, setTodos] = useState<string[]>([])

  function handleCreateNewNote() {
    // Cria nova nota
  }

  return (
    <div>
    {/* Por conta da passagem da função, o componente Header é um componente puro */}
    <Header onCreateNewNote={handleCreateNewNote}/>

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
     <Footer />
    </div>
  )
}