const calculateEngravingPrice = function(message, pricePerWord) {
  const wordsAmount = message.split(' ');
  let total = 0;
  for (let i = 0; i <= wordsAmount.length; i += 1) {
    total = i;
  }
  return total * pricePerWord;
};
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);
