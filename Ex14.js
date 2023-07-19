const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];
const newArray = [];

for (let i = 0; i < 5; i++) {
    arrayA[i] < arrayB[i] ? newArray.push(arrayA[i]) : newArray.push(arrayB[i]);
}
console.log(newArray);