const createModal = (function() {
    const _modal = document.querySelector('.modal')
    const _btnCancel = document.querySelector("button[name='cancel']")
    const _modalForm = document.querySelector('form.modal-form')
    const _inputModalForm = document.querySelector('form input')
    
    const _IS_OPEN_CLASS = '--is-open'

    const open = (config) => {
        _modal.classList.add(_IS_OPEN_CLASS)
        _setButtons(config.sucess,config.fail)
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