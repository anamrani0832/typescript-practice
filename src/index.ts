let age: number = 30;
if (age < 50 ) {
    age += 10;
}
console.log(age);

// functions
function calculateTex(income: number,  texYear= 2022) : number{
    if(texYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;

}
calculateTex(10_000);

// objects 
let employee : {
    id: number,
    name: string,
    retire : (date : Date) => void,

} = {id : 1,
name: "Anam",
retire: (date : Date) => {
    console.log(date);
}}
                                    