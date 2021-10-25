const inputForm = document.querySelector('input[type=text]')
const form = document.querySelector('form.cadastre')
const listaDeUsuarios = document.querySelector('section ul') 

const removeItem = (element) => element.remove()
const formReset = () => form.reset()

const createExcludeButton = (li,fn) => {
     const button = document.createElement('button')
     button.textContent = 'exclude'
     li.appendChild(button)
     button.onclick = () => fn(li)
}

const createUser = (input) => {
    const li = document.createElement('li')
    li.textContent = input.value
    return li
}

const add = (input,listaDeUseuarios) => {
    const user = createUser(input)
    listaDeUseuarios.appendChild(user)
    createExcludeButton(user,removeItem)
    formReset()
}

form.addEventListener('submit', evt => {
    add(inputForm,listaDeUsuarios)
    evt.preventDefault()
    }
)
