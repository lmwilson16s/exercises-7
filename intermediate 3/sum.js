getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ])

  function getBudgets(arr) {
    return arr
      .map(obj => Object.values(obj)[2])
      .reduce((acc, curr) => acc + curr);
    }