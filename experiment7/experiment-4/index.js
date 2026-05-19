function calculateResult(){
    let n = document.getElementById("subject").value;
    let totalMarks = 0;
    for(let i=1; i<=n; i++){
        let marks = prompt(`Enter marks for subject ${i}:`);
        totalMarks += parseFloat(marks);
    }
    let average = totalMarks / n;
    let grade;
    let result;
    if(average >= 90){
        grade = 'A+';
    }
    else if(average >= 75){
        grade = 'A';
    }
    else if(average >= 60){
        grade = 'B';
    }
    else if(average >= 45){  
        grade = 'C';
    }
    else{
        grade = 'F';
    }
    if(grade === 'F'){
        result = 'Fail';
    }
    else{
        result = 'Pass';
    }
    document.getElementById("result").innerHTML = `Total Marks: ${totalMarks}<br>Average Marks: ${average.toFixed(2)}<br>Grade: ${grade}<br>Result: ${result}`;
}
