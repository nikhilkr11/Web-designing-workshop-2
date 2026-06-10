function calculateResult(){
    let n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++)
    {
        let x=parseFloat(prompt("enter the subject no"+(i+1)));
        total+=(x);
    }
    let average=total/n;
    alert("The average is: "+average);
    let grade;
    if(average>=90)
    {
        grade="A++";
    }   
    else if(average>=75)
    {
        grade="A";
    }
    else if(average>=40)
    {
        grade="B";
    }
    else if(average>=33)
    {
        grade="C";
    }       
    else
    {
        grade="FAIL";
    }
    let r=document.getElementById("result").innerHTML="total marks: "+total+"<br/>"+"The average is: "+average+"<br/>"+"The grade is: "+grade+"<br/>";

}