interface HeaderProps {
  onCreateNewNote:() => void;
}

export function Header({ onCreateNewNote }: HeaderProps) {
    // function handleCreateNote() {
    //     Cria uma nota e adiciona no array
    // }
    /**
     * Essa função depende do componente pai para funcionar,
     * então este componente não é um componente puro.
     * Solução: criar uma interface que recebe a função a ser utilizada
     */
    return(
    <header>
        <h1>My new revolutionary to-do list app!</h1>

        <button onClick={onCreateNewNote}>Add new todo</button>
      </header>
    )
}