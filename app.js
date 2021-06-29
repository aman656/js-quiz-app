var passcode = '890str';
var admin = 'aman';
var score  =0;
function authentication(){
   var a = document.getElementById('name').value
   var b = document.getElementById('pass').value;
   if(a==admin && b==passcode){
      window.location.replace('quiz.html')
    
   }
   else{
      a = ""
      b = ""
      alert("Entries mismatch")
      
   }
}

var lst = [
    {
        question:"What is the capital of Germany?",
        choices:['Berlin','Poland','Copanhagen'],
        correct:'Berlin'
    },
    {
        question:"Which is the largest mountain in  the world?",
        choices:['K2','Mount Everest','Karakoram'],
        correct:"Mount Everest"
    },
    {
        question:'Currect president of Pakistan?',
        choices:['Sheikh Rasheed','Farooq Sattar','Arif Alvi'],
        correct:'Arif Alvi'
    }
]
function Start(e){
    var a = document.getElementById('question');
    a.innerHTML = lst[e].question;
    var b = document.getElementsByClassName('option')
    for(var i=0;i<b.length;i++){
        b[i].innerHTML = lst[e].choices[i];
    }

  
   
    }
 


var questionNumber = 0;
var count=1
function Next(){
    var a = document.getElementById('next');
    questionNumber++;
    if(questionNumber<lst.length-1){
        Start(questionNumber);
        


    }
    else if(questionNumber==2){
        a.innerHTML = "Submit";
        Start(questionNumber)
    }

    else if(questionNumber==3){
        var b = document.getElementById("res")
        b.innerHTML = "Your score is " + score
       
       
    }
    console.log(score);

    
 
    
}

function clickRes(e){
    removeclickRes();
    e.classList.add('active');
    console.log(e)
}

function removeclickRes(){
    var a  = document.getElementsByClassName('active');
    for(var i =0;i<a.length;i++){
        a[i].classList.remove('active')
    }
}
var count=0
function Score(){
    var res = document.getElementsByClassName('active');
    console.log(lst[count].correct)
    
    if(res[0].innerHTML == lst[count].correct){
        score +=1;
    }
    count++

}

function Result(){
   
    var a = document.getElementById('res');
    
    a.innerHTML = "Your score is " + score;
}
