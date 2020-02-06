const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
   let result = (`${i + 1} - ${array[i]}`);
   console.log(result);
}
};

const r1 = logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
console.log(r1);

const r2 = logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
console.log(r2);
