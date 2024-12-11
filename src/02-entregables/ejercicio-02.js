console.log("************** DELIVERABLE 02 *********************");

const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]


const concat = (a,b) => [...a, ...b];
console.log(concat(arr1,arr2))

///////////////////////////////////////////////

const concat2 = (...arrs) => {
 let newArr = [];
 for(let arr of arrs){
    newArr = [...newArr, ...arr]
 }
 return newArr
}
console.log(concat2(arr1, arr2, ['nueve', 'diez'], [11, 12]))


