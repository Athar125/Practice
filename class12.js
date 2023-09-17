import inquirer from "inquirer";
console.log("First");
async function passingGrades() {
    var result = await inquirer.prompt([{
            type: "number",
            name: "1st year",
            message: "Enter marks",
        }]);
    if (result.number > 40) {
        console.log("user is pass");
    }
    else if (result.number > 50) {
        console.log("user get E grade");
    }
    else if (result.number > 60) {
        console.log("user get D grade");
    }
    else if (result.number > 70) {
        console.log("user get C grade");
    }
    else if (result.number > 80) {
        console.log("user get B grade");
    }
    if (result.number > 90) {
        console.log("user get A grade");
    }
}
passingGrades();
