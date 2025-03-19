// take in a pupils marks and return their grade

function calculateGrade (marks) {
    
    if (!marks){
        return "Please provide the marks"
    }

    if (typeof marks !== "number"){
        return "Please provide a valid number"
    }

    if (marks < 50) {
        return "E";
    }
    
    if (marks < 60) {
        return "D";
    }

    if (marks < 70){
        return "C";
    }

    if (marks < 80){
        return "B";
    }

    return "A"
}

const grade = calculateGrade(98)

console.log(grade)
    