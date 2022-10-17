// let age: number = 30;
// if (age < 50 ) {
//     age += 10;
// }
// console.log(age);
// // functions
// function calculateTex(income: number,  texYear= 2022) : number{
//     if(texYear < 2022) {
//         return income * 1.2;
//     }
//     return income * 1.3;
// }
// calculateTex(10_000);
// objects 
// Type Alaises
// type Employee {
//     id: number,
//     name: string,
//     retire : (date : Date) => void,
// }
// let employee :Employee = {id : 1,
// name: "Anam",
// retire: (date : Date) => {
//     console.log(date);
// }}
// Union Types ... This technique is called Narrowing
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
console.log(kgToLbs(10));
console.log(kgToLbs('10'));
