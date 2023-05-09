const sum = (a, b) => {
  return a+b 
}

const testCases = [
  {a: 0, b: 0, result: 0},
  {a: 5, b: 7, result: 12},
  {a: -10, b: -45, result: -55},
  {a: -10, b: 5, result: -5},
  {a: 0, b: 10, result: 10},
]


testCases.forEach(element => {
    const {a, b, result} = element;
  console.assert(sum(a, b) === result, `Sum(${a}, ${b}) === ${result}`)
});