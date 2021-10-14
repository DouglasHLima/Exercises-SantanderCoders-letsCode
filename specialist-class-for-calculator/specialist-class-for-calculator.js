/* A sampla class to testing inheritance and polymorphism
    Create a class of functions: list, enter, equals, reset.
    the classes that inherit it should implement these functions and must be experts in a specific operation,
    such as:
    sum, subtraction, division, and multiplication
*/

class CalculatorBaseFunctions {

    constructor(operator){
        this._historic = new Map()
        this._operands = []
        this._operator = operator  
    }

    list (){
        return this._historic
    }
    enter (value){
        this._operands = [...this._operands,value]
    }
    equals (callbackFn){
        let result = this._operands.reduce(callbackFn)
        this._historic.set(this._operands.join(this._operator),result)
        this._operands = []
        return result
    }
    reset (){
        this._historic = new Map()
    }
}

class CalculatorSum extends CalculatorBaseFunctions {
    constructor(){
        super('+')
    }

    equals (){
        const soma = (acc,curr) => acc + curr  
        return super.equals(soma)
    }
}

class CalculatorSubtraction extends CalculatorBaseFunctions{
    constructor(){
        super('-')
    }

    equals (){
        const subtraction = (acc,curr) => acc - curr
        return super.equals(subtraction)
    }
}

class CalculatorMultiply extends CalculatorBaseFunctions{
    constructor(){
        super('*')
    }

    equals (){
        const multiply = (acc,curr) => acc * curr
        return super.equals(multiply) 
    }
}

class CalculatorDivide extends CalculatorBaseFunctions{
    constructor(){
        super('/')
    }

    enter(value){
        value !== 0? super.enter(value):alert(`could't divide 0`)
    }

    equals (){
        const divide = (acc,curr) => acc / curr
        return super.equals(divide)
    }
}