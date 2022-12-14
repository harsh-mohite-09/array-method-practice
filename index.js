"use strict";

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const eurToUsd = 1.1;

const movementsUSD = movements.map((mov) => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

const movementsUSDfor = [];

for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(
      mov
    )}`
);

// console.log(movementsDescriptions);

// const deposits = movements.filter(e => e > 0);
// console.log(deposits);
// const withdrawals = movements.filter(e => e < 0);
// console.log(withdrawals);

const balance = movements.reduce((acc, el) => acc + el, 0);
// console.log(balance);

//Maximum value

const maxNum = movements.reduce((acc, e) => (acc > e ? acc : e));
// console.log(maxNum);

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

const firstWidhtdrawal = movements.find((mov) => mov < 0);
// console.log(firstWidhtdrawal);

const account = accounts.find((acc) => acc.owner === "Jessica Davis");
// console.log(account);

// SOME
const anyDeposits = movements.some((el) => el > 0);
// console.log(anyDeposits);

//Every
// console.log(account4.movements.every(mov => mov > 0));

// Separate Callback
const deposit = (mov) => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
// const [first, second, ...rest] = arr;
// console.log([...first, ...second, ...rest]);
// console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(1));
// console.log(arrDeep.flat(2));

const overallBalance = accounts
  .map((el) => el.movements)
  .flat()
  .reduce((a, b) => a + b, 0);
// console.log(overallBalance);

const overallBalance2 = accounts
  .flatMap((el) => el.movements)
  .reduce((a, b) => a + b, 0);
// console.log(overallBalance2);

//Strings

const owners = ["Harsh", "Jonas", "Martha", "Adam"];
// console.log(owners.sort());

//Numbers
// console.log(movements);
// console.log(movements.sort());
// console.log(movements.sort((a, b) => a - b));

//More ways of creating and filling arrays

const x = new Array(7);
// console.log(x);

x.fill(1, 3, 5);
// console.log(x);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

const diceRolls = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 6 + 1)
);
// console.log(diceRolls);

labelBalance.addEventListener("click", function () {
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => el.innerText.replace("€", "")
  ).reduce((acc, el) => acc + Number(el), 0);

  // console.log(movementsUI);
});

// Array methods practice

// 1.
const bankDepositSum = accounts
  .flatMap((e) => e.movements)
  .reduce((a, b) => (b > 0 ? a + b : a));
// console.log(bankDepositSum);

//2.
const bankDepositsGreaterThan1000 = accounts
  .flatMap((e) => e.movements)
  .reduce((a, b) => (b >= 1000 ? ++a : a), 0);
// console.log(bankDepositsGreaterThan1000);

//3.
const { deposits, withdrawals } = accounts
  .flatMap((e) => e.movements)
  .reduce(
    (sums, item) => {
      // item > 0 ? (sums.deposits += item) : (sums.withdrawals += item);
      sums[item > 0 ? "deposits" : "withdrawals"] += item;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(deposits, withdrawals);

//4.
//this is a nice title -> This Is a Nice Title

const titleCase = (str) => {
  const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
  const exceptions = ["a", "an", "the", "and", "but", "or", "on", "in", "with"];
  return capitalize(
    str
      .toLowerCase()
      .split(" ")
      .map((e) => (exceptions.includes(e) ? e : capitalize(e)))
      .join(" ")
  );
};

// console.log(titleCase('this is a nice title'));
// console.log(titleCase('this is a LONG title but not too long'));
// console.log(titleCase('and here is another title with an EXAMPLE'));

//Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1.
dogs.forEach(
  (dog) => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);
console.log(dogs);

//2.
const sarahDog = dogs.find((e) => e.owners.includes("Sarah"));
let portion = "";
if (sarahDog.curFood > sarahDog.recommendedFood * 1.1) portion = "Too much";
else if (sarahDog.curFood < sarahDog.recommendedFood * 0.9)
  portion = "Too less";
else porition = "Eating OK";
console.log(portion);

//3.

const tooMuchOwners = dogs
  .filter((e) => e.curFood > e.recommendedFood * 1.1)
  .flatMap((e) => e.owners);

const tooLittleOwners = dogs
  .filter((e) => e.curFood < e.recommendedFood * 0.9)
  .flatMap((e) => e.owners);

console.log(tooMuchOwners);
console.log(tooLittleOwners);

//4.
const tooMuchString = tooMuchOwners
  .map((e, i, arr) => (i < arr.length - 1 ? `${e} and` : `${e}'s `))
  .join(" ")
  .concat("dogs eat too much!");

const tooLessString = tooLittleOwners
  .map((e, i, arr) => (i < arr.length - 1 ? `${e} and` : `${e}'s `))
  .join(" ")
  .concat("dogs eat too little!");

console.log(tooMuchString);
console.log(tooLessString);

//5.
const anyExactFoodDog = dogs.reduce(
  (acc, dog) => (dog.curFood === dog.recommendedFood ? (acc = true) : acc),
  false
);
console.log(anyExactFoodDog);

//6.
const anyOkFoodDog = dogs.reduce(
  (acc, dog) =>
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9
      ? (acc = true)
      : acc,
  false
);

console.log(anyOkFoodDog);

//7.
const okFoodDog = dogs.filter(
  (dog) =>
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9
);
console.log(okFoodDog);

//8.
const sortedDogs = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(sortedDogs);
