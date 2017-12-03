const add = (a, b) => a + b ;

test('should add two numbers', () => {
  const result = add(3, 4);

  if (result !== 7) {
    throw new Error(`You add 3 and 4, the result was ${result}`)
  }
});
