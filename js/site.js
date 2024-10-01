
//get the values from the page
//start or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    // let numbers =[];

    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generate numbers
        let numbers = genrateNumbers(startValue, endValue);
         //call display numbers
        displayNumbers(numbers);
    }
    else{
        alert("You must enter an Integer");
    }
   
}

//generate numbers from startValue to endValue
//logic function(s)
function genrateNumbers(sValue, eValue){
    let numbers = [];
    //all numbers from start to end
    for(let i=sValue; i<= eValue; i++){
        numbers.push(i);
    }
    return numbers;
}

//display the numbers and the even numbers bold
//display or view functions

function displayNumbers(numbers){

    let templateRows ="";
  
    for(let i=0; i < numbers.length; i++){

        let className = "even";
       
        let number = numbers[i];
        if(number % 2 == 0){
            className = "even";
        }
        else{
            className ="odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`
    }
    
    document.getElementById("results").innerHTML = templateRows;
}
