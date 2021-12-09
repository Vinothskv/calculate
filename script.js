
class calculator{
    constructor(preButton,curButton){
        this.preButton=preButton
        this.curButton=curButton
        this.clear()
    }
    clear(){
        this.curOperand=''
        this.preOperand=''
        this.operation=undefined
    

    }
    delete(){
        this.curOperand =this.curOperand.toString().slice(0,-1)

    }
    appendNumber(number){
        if(number === '.'&& this.curOperand.includes('.'))return;
        this.curOperand =this.curOperand.toString() + number.toString();

    }
    operator(operation){
        if(this.curOperand === '')return
        if(this.preOperand !== ''){
            this.calculate()
        }
        this.operation = operation
        this.preOperand = this.curOperand
        this.curOperand=' '

    }
    calculate(){
        let computation
        const previ =parseFloat(this.preOperand)
        const curren =parseFloat(this.curOperand)
        if(isNaN(previ) || isNaN(curren))return
        switch(this.operation){
            case '+':
                computation = previ + curren;
            break;
            case '-':
                computation = previ - curren;
            break;
            case '*':
                computation = previ * curren;
            break;
            case '/':
                computation = previ / curren;
            break;
            default:
                return                    
                
        }
        this.curOperand = computation
        this.operation = undefined
        this.preOperand = ' '
    


    }  
    resultUpdate() {
        this.curButton.innerText = this.curOperand
        this.preButton.innerText = this.preOperand

    }
}




const numButton=document.querySelectorAll('[dnumbers]')
const opeButton=document.querySelectorAll('[doperation]')
const clButton=document.querySelector('[clearout]')
const delButton=document.querySelector('[delout]')
const equButton=document.querySelector('[dequal]')
const preButton=document.querySelector('[preoutput]')
const curButton=document.querySelector('[curoutput]')

console.log(numButton);
const calculates = new calculator(preButton,curButton)

numButton.forEach(button =>{
    button.addEventListener('click',() =>{
        calculates.appendNumber(button.innerText)
        calculates.resultUpdate()
    })
})
opeButton.forEach(button =>{
    button.addEventListener('click',() =>{
        calculates.operator(button.innerText)
        calculates.resultUpdate()
    })
})
equButton.addEventListener('click',button =>{
    calculates.calculate()
    calculates.resultUpdate()
})
clButton.addEventListener('click',button =>{
    calculates.clear()
    calculates.resultUpdate()
})
delButton.addEventListener('click',button =>{
    calculates.delete()
    calculates.resultUpdate()
})