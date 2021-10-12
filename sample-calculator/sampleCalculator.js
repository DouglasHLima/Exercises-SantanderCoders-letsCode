let calculator = (() => {

    let operands = []
    let result = 0
    const operators = new Map()
    const historic = new Map()
    
    const sum = (a,b)=> a+b;

    const subtraction = (a,b) => a-b;

    const multiply = (a,b) => a*b;

    const divide = (a,b) =>  a/b

    operators.set('+',sum)
             .set('-',subtraction)
             .set('*',multiply)
             .set('/',divide)

  
    const enter = (value) => {operands=[...operands,value]}

    const equal = () => {
        let [a,operator,b] = operands
        let operation = operators.get(operator)
        result = operation(a,b)
        historic.set(operands.join(''),result)
        operands = []
        return result
    }

    const getHistoric = () => historic

    const resetEnters = () => operands = []

    const reset = () => {historic.clear()}

    return{
        enter,
        equal,
        getHistoric,
        resetEnters,
        reset
    }

})()