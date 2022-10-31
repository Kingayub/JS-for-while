const array = ['JS', 'CSS', 'HTML', 'REACT', 'C++', 'Pyton', 'TypeScript', 'Pasqual', 'zayndi', 'ramzan'];
let accumulator = [];
for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        accumulator.push(array[i]);
    }
}

console.log(accumulator);