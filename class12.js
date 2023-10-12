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
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class ReactAngle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const shapes = [new Circle(10), new ReactAngle(7, 12)];
shapes.forEach((shape) => {
    console.log(shape);
});
export {};
