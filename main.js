const load = document.querySelector('#loadButton')
const result = document.querySelector('#result')

load.addEventListener('click', (e) => {
    e.preventDefault();
    result.innerText = 'Вставлен текст'
})


