const button = document.querySelector('#switch button')
const html = document.documentElement

// Verifica se já existe um tema salvo no navegador
const savedTheme = localStorage.getItem('theme')

if (savedTheme === 'light') {
    html.classList.add('light')
}

button.addEventListener('click', () => {
    html.classList.toggle('light')

    // Salva a preferência do usuário
    if (html.classList.contains('light')) {
        localStorage.setItem('theme', 'light')
    } else {
        localStorage.setItem('theme', 'dark')
    }

    // Anima a rotação do ícone a cada clique
    button.classList.toggle('rotate')
})