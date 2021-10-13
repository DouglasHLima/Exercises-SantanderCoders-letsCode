let calculator = (() => {

    let _operands = []
    let _result = 0
    const _operators = new Map()
    const _historic = new Map()
    
    const _sum = (a,b)=> a+b;

    const _subtraction = (a,b) => a-b;

    const _multiply = (a,b) => a*b;

    const _divide = (a,b) =>  a/b

    _operators.set('+',_sum)
             .set('-',_subtraction)
             .set('*',_multiply)
             .set('/',_divide)

    const _verifyOperators = (operator) => _operators.has(operator)
    const _verifyNumbers = (number) => typeof number === "number"

    const enter = (value) => {
        if (_operands.length === 0 || _operands.length === 2){
            _verifyNumbers(value)? _operands=[..._operands,value] : alert('entrada inválida primeiro e ultimo valor devem ser números')
        }else{
            _verifyOperators(value)? _operands=[..._operands,value] : alert('entrada inválida operador não encontrado')
        }
    }

    const equals = () => {
        let [a,operator,b] = _operands
        let _operation = _operators.get(operator)
        _result = _operation(a,b)
        _historic.set(_operands.join(''),_result)
        _operands = []
        return _result
    }

    const getHistoric = () => _historic

    const resetEnters = () => _operands = []

    const reset = () => {_historic.clear()}

    return{
        enter,
        equal: equals,
        getHistoric,
        resetEnters,
        reset
    }

})()