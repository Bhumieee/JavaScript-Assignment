     // STUDENT Marks Analyzer!


let name = "Bhumi";
let rollNo = 1;
let department = "Cse(AI & ML)";
let marks= [94,98,95,92,96];

function calculateTotal(marks){
    let total =0
    for(let i = 0; i<marks.length; i++){
    total+=marks[i];
}
return total
}


function calculatePercentage(marks){
    let total = calculateTotal(marks);
    return (total/500)*100;
}


function findHighest(marks){
    let max = marks[0]
    for(let i = 0; i<marks.length; i++){
        if(marks[i]>max){
            max=marks[i]
        }
    }
    return max;
}


function findLowest(marks){
    let min = marks[0]
    for(let i = 0; i<marks.length; i++){
        if(marks[i]<min){
            min=marks[i]
        }
    }
    return min;
}


let count = 0
for(let i = 0; i<marks.length; i++){
    if(marks[i]>=40){
        count++
    }
}


let res = name.toUpperCase();
let rev = name.length;


// Bonus Challange:

let percentage = calculatePercentage(marks)
function performance(percentage){
    if(percentage<=50){
        return "Needs Improvement";
    }else if(percentage<=70){
        return "Average";
    }else if(percentage<=90){
        return "Good";
    }else{
        return "Excellent";
    }
}


console.log("____Student Report Card____");
console.log("Student:", name);
console.log("Roll Number:", rollNo);
console.log("Department:", department);
console.log("Marks:", marks);
console.log("Total Marks:",calculateTotal(marks));
console.log("Percentage:",calculatePercentage(marks)+"%");
console.log("Highest Marks:",findHighest(marks));
console.log("Lowest Marks:",findLowest(marks));
console.log("Subject Passed:",count);
console.log("Uppercase:",res);
console.log("number of characters:",rev);
console.log("Student Performance:", performance(percentage));
