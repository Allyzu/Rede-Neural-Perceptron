let perceptron;

function setup(){
    perceptron = new Perceptron()

    const input = [-1, 0.5]

    const guess  = perceptron.guess(input)

    console.log("Resultado: " + guess)

    setTimeout(() => {
        setup()
    }, 1000)

}