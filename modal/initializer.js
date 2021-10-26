const btnOpenModel = document.querySelector('.btnOpenModal')

const settings = [
    {labelName:'Nome', element: 'input', type:'name', placeholder: 'Insira o primeiro nome', required: true},
    {labelName:'Sobrenome', element: 'input', type:'lastname', placeholder: 'sobrenome', required: false},
    {labelName:'Email', element: 'input', type:'email', placeholder:'Insira seu Email', required: true},
    {labelName:'Resumo', element: 'input', type:'textarea', placeholder:'uma breve descrição', required: false}
]

const callbackfn = {
    sucess: value => {console.log('enviando os dados: ',value)},
    fail: () => console.log('cliente cancelou')
}

btnOpenModel.onclick = () => createModal.open(settings,callbackfn)