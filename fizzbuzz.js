function fizzBuzz(numero) {
    switch (true) {
      case (numero % 3 === 0 && numero % 5 === 0):
        return "FizzBuzz";
      case (numero % 3 === 0):
        return "Fizz";
      case (numero % 5 === 0):
        return "Buzz";
      default:
        return numero;
    }
  }

  module.exports = fizzBuzz;