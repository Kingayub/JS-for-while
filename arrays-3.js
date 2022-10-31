const array = [1, 2, 3, 4, 5, 6, 7, -8, -9, -10];
const result = [];

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        result.push(array[i])
    }
}
console.log(result)
// let i = 0;
// while (i < array.length) {
//     console.log(array[i])
//     i++;
// }