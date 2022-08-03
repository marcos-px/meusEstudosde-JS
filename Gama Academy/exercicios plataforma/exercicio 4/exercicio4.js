const listContainer = document.querySelector('[data-lists]')
const newListform = document.querySelector('[data-new-list-form]')
const newListinput = document.querySelector('[data-new-list-input]')


let lists = [];

newListform.addEventListener('submit', function (e) {
    e.preventDefault()
    const listname = newListinput.value
    if (listname === null || listname === '') return
    const list = createList(listname)
    newListinput.value = null
    lists.push(list)
    render()
})

function render() { 
    lists.forEach(function(list) {
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list
        listContainer.appendChild(item)
    })
}

function createList(name) {
    return {id: Date.now().toString(), name: name}
}

render()