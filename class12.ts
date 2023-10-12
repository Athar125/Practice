
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


//  01/10/2023
/*
function printFullName(firstName:string, lastName:string){
    if (lastName){
    console.log(`${firstName} ${lastName}`);
} else {
    console.log(firstName);
}
}
printFullName("Athar", "Atta");

function add(a1:number,a2:number):number;
function add(a1:number, a2:string):string;
function add(a1:string, a2:string):number;
function add(a1:any, a2:any):any{
    return a1 + a2
}
console.log(add("Athar", "Sahib"));
console.log(add(23, "98"));
console.log(add(23 , 22));
console.log(true, "65");

// procedural oriented progarmmin | functional programming
// OOPs

class car{
    company:string = "";
    modelYear:number = 0;
    color:string = "";

    constructor(_company:string, _modelYear:number, _color:string){
        this.company = _company;
        this.color = _color;
        this.modelYear = _modelYear;
    }
    start(){
        console.log("engine starting");
    }
}
const car1 = new car("honda", 2023, "Black");
// car1.color = "Silver";
//car1.company = "RANGE ROVER";
//car1.modelYear = 2024;
console.log(car1);
const car2 = new car("BMW", 2022, "Gray", );
console.log(car2);
const car3 = new car("Toyota", 2020, "Brown");
console.log(car3);
*/
// not supported oops in javascript.
// class is a passive form.


// 08/10/2023
// Inheritance
// class A{
//     title:string = "DNA";
//     display(){
//         console.log("title", this.title);
        
//     }
// }
// class B extends A{
//     description:string = "Any description";
// }
// const b = new B();
// b.display();

// const a = new A();
// a.display();

// class shape{
//     width:number = 0;
//     height:number = 0;
//     getArea(){
//         return this.width * this.height
//     }
// }
// class cube extends shape{
//      width:number = 0;
//     height:number = 0;
//     thirdSide:number = 0;
//     getArea(){
//         return this.width * this.height * this.thirdSide
//     }
// }
// const Cube = new cube();
// cube.getArea()

                                   // Polymorphism

// interface shape{
//     getArea():void
// }
// class Circle implements shape{
//     constructor (public radius:number){}
//     getArea():number{
//         return Math.PI * this.radius ** 2
//     }
// }
// class ReactAngle implements shape{
// constructor (public width:number, public height:number ){}
// getArea():number{
//     return this.width * this.height
// }
// }

// const shapes:shape[] = [new Circle(10), new ReactAngle(7, 12)]

// shapes.forEach((shape)=>{
//     console.log(shape)
// })

                         // encapsulation
             // Public, Private, Protected 

                           // Abstraction

// interface shape{
//      getArea():number
// }
// abstract class AShape{
//     width:number = 0;
//     height:number = 0;
//     constructor(width:number , height:number){
//     this.width = width;
//     this.height = height;
// }
//     getArea(){
//         return this.width * this.height
//     }
//   abstract display():void
// }
// class Circle extends AShape{
//         constructor (public radius:number){
//             super(10 , 20)
//         }
//         getArea():number{
//             return Math.PI * this.radius ** 2
//         }

//     }
//     class ReactAngle extends AShape{
//     constructor (public width:number, public height:number ){
//         super(20 , 30)
//     }
//     getArea():number{
//         return this.width * this.height
//     }
//     }
    
//     const shapes:shape[] = [new Circle(10), new ReactAngle(7, 12)]
    
//     shapes.forEach((shape)=>{
//         console.log(shape)
//     })

// class A{
//     color:string = "Red"
//     setColor(color:string){
//         this.color = color
//     }
// }
// const obj1 = new A();
// obj1.setColor("Blue")
// console.log("obj1", obj1.color);

// const obj2 = new A();
// console.log("obj2", obj2.color);

// class A{
//     static color:string = "Red"
//     setColor(color:string){
//         this.color = color
//     }
// }