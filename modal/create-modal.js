const createModal = (function() {
    const _modal = document.querySelector('.modal')
    const _btnCancel = document.querySelector("button[name='cancel']")
    const _modalForm = document.querySelector('form.modal-form')
    const _inputModalForm = document.querySelector('form input')
    
    const _IS_OPEN_CLASS = '--is-open'
    let _sucessFn
    let _cancelFn


    const open = (config) => {
        _modal.classList.add(_IS_OPEN_CLASS)
        if(config.sucess) _sucessFn = config.sucess
        if(config.fail) _cancelFn = config.fail
        _setButtons(_sucessFn,_cancelFn)
    }
    const _setButtons = (successFn,cancelFn) => {
        _modalForm.onsubmit = (event) => {
            _executeFn(successFn)
            event.preventDefault()
        }
        _btnCancel.onclick = () => _executeFn(cancelFn)
    }
    const _executeFn = (callbackfn) => { 
        callbackfn(_inputModalForm.value)
        _resetModalForm()
        _close()
    }
    const _close = () => _modal.classList.remove(_IS_OPEN_CLASS)
    
    const _resetModalForm = () => _modalForm.reset()

    return{
        open
    }
})()