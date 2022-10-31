const array = [22, 33, 22, 12, 13, 15, 16, 17, 19, 20];
let accumulator = 0;
for (let i = 0; i < array.length; i++) {
    accumulator += array[i];
}
console.log(accumulator);