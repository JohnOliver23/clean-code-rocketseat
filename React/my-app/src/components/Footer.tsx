export function Footer() {
    const currentYear = new Date().getFullYear()
    return(
    <footer>
        Copyright &copy; John Oliver {currentYear}
      </footer>
    )
}