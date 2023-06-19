const fizzBuzz = require('./fizzbuzz');

describe('FizzBuzz', () => {
    test('Retorna FizzBuzz para números múltiplos de 3 y 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });

  test('Retorna Fizz para números múltiplos de 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  test('Retorna Buzz para números múltiplos de 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  test('Retorna el número original si no es múltiplo de 3 ni de 5', () => {
    expect(fizzBuzz(2)).toBe(2);
  });
});
