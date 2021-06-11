const n = -2,
      m = 2.5,
      count = 10;

const min = Math.min(n, m);
const max = Math.max(n, m);

// ========== 1 solution ==========

const firstArray = [];

for (let i = 0; i < count; i++) {
    const randomNumber = Math.random() * (max - min) + min;
    firstArray.push(randomNumber);
}

console.log(firstArray);

// ========== 2 solution ==========

const secondArray = Array.from(Array(count), () => Math.random() * (max - min) + min);

console.log(secondArray);
