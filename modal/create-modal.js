const createModal = (function() {
    

    
    const _modal = document.querySelector('.modal')
    const _modalForm = document.createElement('form')
    
    const _inputModalForm = document.createElement('input')
    _inputModalForm.setAttribute('type','email')
    _inputModalForm.required = true
    _inputModalForm.placeholder = 'Digite seu Email'
    
    const _btnCancel = document.createElement('button')
    _btnCancel.setAttribute('type','button')
    _btnCancel.textContent = 'cancel'

    const _submitButton = document.createElement('button')
    _submitButton.setAttribute('type','submit')
    _submitButton.textContent = 'ok'

    _modalForm.appendChild(_inputModalForm)
    _modalForm.appendChild(_submitButton)
    _modalForm.appendChild(_btnCancel)
    _modal.appendChild(_modalForm)
    
    const _IS_OPEN_CLASS = '--is-open'

    const open = (config) => {
        _modal.classList.add(_IS_OPEN_CLASS)
        _setButtons(config.sucess,config.faiokl)
    }
    const _setButtons = (successFn,cancelFn) => {
        _modalForm.onsubmit = (event) => {
            _executeFn(successFn)
            _defaultFormActions()
            event.preventDefault()
        }
        _btnCancel.onclick = () => {
            _executeFn(cancelFn)
            _defaultFormActions()
        }
    }
    const _executeFn = (callbackfn) => {
        if(callbackfn) callbackfn(_inputModalForm.value)
    }

    const _defaultFormActions = () =>{
        _resetModalForm()
        _close()
        
    }

    const _close = () => _modal.classList.remove(_IS_OPEN_CLASS)
    
    const _resetModalForm = () => _modalForm.reset()

    return{
        open
    }
})()