const btnOpenModel = document.querySelector('.btnOpenModal')

const settings = {
    sucess: email => {console.log('enviando o e-mail: ',email)},
    fail: () => console.log('cliente cancelou')
}

btnOpenModel.onclick = function() {createModal.open(settings)}