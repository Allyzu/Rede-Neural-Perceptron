// perceptron.js


// Função responsável por tranformar os numeros quebrados em 1 ou -1
function sign(num){
    return num >= 0 ? 1 : -1
}

class Perceptron {
    weights = [0,0];

    lr = 0.1

    //Metodo contrutor para criação dos pesos de ajuste do perceptron
    constructor(){
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[1] = random(-1, 1)
        }
    }

    //Metodo que faz a multiplicação das entradas pelos pesos ou seja o treinamento
    guess(input){
        let sum = 0

        for(let i = 0; i < this.weights.length; i++){
            sum+= input[i] * this.weights[i]

        }

        const output = sign (sum)
        return output
    }

    train (inputs, target){
        const guess = this.guess(inputs)

        const error = target - guess

        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.lr
        }
    }

}