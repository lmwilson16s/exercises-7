drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
  ];

  const drinkPrices = drinks.sort((a, b) => a.price - b.price);
  console.log("drinkPrices:", drinkPrices);