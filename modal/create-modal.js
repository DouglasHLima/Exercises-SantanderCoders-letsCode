const createModal = (function() {

    const _IS_OPEN_CLASS = '--is-open'
    
    const _modal = document.querySelector('.modal')
    const _modalForm = document.createElement('form')

    const _btnCancel = document.createElement('button')
    _btnCancel.setAttribute('type','button')
    _btnCancel.textContent = 'cancel'

    const _submitButton = document.createElement('button')
    _submitButton.setAttribute('type','submit')
    _submitButton.textContent = 'ok'
    
    const _createElement = (objOfElement) => {
        const div = document.createElement('div')
        const label = document.createElement('label')
        label.textContent = objOfElement.labelName
        const input = document.createElement(objOfElement.element)
        input.setAttribute('type',objOfElement.type)
        input.setAttribute('name',objOfElement.type)
        input.placeholder = objOfElement.placeholder
        input.required = objOfElement.required
        div.appendChild(label)
        div.appendChild(input)

        return div
    }

    const _makeForm = (settings) => {
        settings.map(_createElement).forEach( field => {
            _modalForm.appendChild(field)
        })
        _modalForm.appendChild(_submitButton)
        _modalForm.appendChild(_btnCancel)
        _modal.appendChild(_modalForm)
    }
     
    const open = (settings,callbackfn) => {
        _clearForm()
        _modal.classList.add(_IS_OPEN_CLASS)
        _makeForm(settings)
        _setButtons(callbackfn.sucess,callbackfn.fail)
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
        if(callbackfn) callbackfn([..._modalForm.querySelectorAll('input')]
            .map( input => ({
                key : input.name,
                value : input.value
            }))
        )
    }

    
    const _clearForm =() => _modalForm.textContent = ''

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