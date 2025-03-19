// what are functions

//how are functions created - declaring

//keword - function, return
function sayHello (){
    const greeting = "hello"
    const name = "James"
    console.log(greeting + name)
}

//they are called/ invoked

// learn about self invoking function

sayHello()

//function can take in arguments and patrameters

function sayHello (name){
    if (! name ) {   //name === undefined
        console.log("Error: Name is required")
        return; // terminates the operation of the function when the condition is not met- replaces the use of else
    }
    const greeting = "hello"
    console.log(greeting + " " + name)
}

sayHello("Tom")
sayHello("Vin")

//the return keyword - to sop execution of a porgram
// to output 

function addTwoNumbers (num1, num2){
    return num1+num2 // here the return keyword will output a value
}

const total = addTwoNumbers(3, 6)
console.log(total)

//create a program that takes ones basic salary and calulate net salary by deducting the payable tax

//0-10000 = 10%
//10001 - 20000 = 12%
// above that 14%

function taxCalculator (grossSalary){

    //validate
    if (!grossSalary){
        return "Please provide the salary"
    }


    //check for salary

    let tax = 0
        if(grossSalary < 10000){
            tax = 10/100*grossSalary;
        } else {
            const taxToBeCharged = 10/100 * 10000;
            const remainingValue = grossSalary - 10000;

            if (remainingValue < 10000){
                const secondTierTax = 12/100 * remainingValue

                taxToBeCharged = taxToBeCharged + secondTierTax
            }else {
                const thirdTierTax = 12/100 * 10000

                const finalRemainingValue = grossSalary - 20000

                if (finalRemainingValue > 0){
                    lastTax = 14/100* (grossSalary -20000)

                    thirdTierTax=thirdTierTax +lastTax
                }
            }
            
        }

        
        // finally
        return grossSalary- tax
}

taxCalculator(10000)

