function print_current_page()
{
window.print();
}
function geridonus(){
    location.href='index.html';   
}

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}

function extractionBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 + num2;

}

function collectionBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}


  // Function to change webpage background color
  function changeBodyBg(color){
        document.body.style.background = color;
    }
    
    // Function to change heading background color
    function changeHeadingBg(color){
        document.getElementById("heading").style.background = color;
    }