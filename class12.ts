
/*import inquirer from "inquirer"

console.log("First");

async function passingGrades() {
    var result=await inquirer.prompt ([{
        type:"number",
        name:"num",
        message:"Enter marks",
    }])
if (result.num>40 && result.num<=50) {  // apply condition all.
    console.log("user is pass");
}
else if (result.num>50) {
    console.log("user get E grade");
}
else if (result.num>60) {
    console.log("user get D grade");
}
else if (result.num>70) {
    console.log("user get C grade");
}
else if (result.num>80) {
    console.log("user get B grade");
}    
}

passingGrades()
*/

// 1. syntax error
// letc a:number = 10;
// ify ()
// fora

// 2. runtime errors   risky code

/*
import inquirer from "inquirer"

try{
    const output = await inquirer.prompt ([{
        type : "number",
        name : "num",
        message : "enter num 1",
    }])
} catch (error ) {
    console.log("error", error)
}
finally{
    console.log("finally");
}
console.log("after inquirer")
*/

// 3. logical errors   human error
// var num1 = 10;
// var num2 = 20;
// var sum:number = num1 * num2;
// console.log("sum", sum);


// 24/9/2023
// ##enum
// enum COLORS {RED, GREEN, BLUE};
// const whatColor:number = COLORS.GREEN;
// console.log("whatColor", whatColor);

// generic

// function swap(arr:number[]):number[]{
  //  return [arr[1], arr[0]]
// }

// const result:number[] = swap([10, 20])
// console.log("result", result)

/*
function swap<T>(arr:T[]):T[]{
    return [arr[1], arr[0]]
}

const result:number[] = swap<number>([10, 20])
const result2:string[] = swap<string>(["ATHAR", "AZHAR"])
const result3:boolean[] = swap<boolean>([true, false])

console.log("result", result2, result, result3)


// interface

interface StudentTypeC {
    rollNo:number,
    uni:string,
}
*/