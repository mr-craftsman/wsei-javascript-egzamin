var myArray = [1,11,17,5,7,3];
//var myArray = [];
//var myArray = [13];

function biggestSumOfTwoElements(myArray)
    {               
      switch (myArray.length)
       {
            case 0:
               return false           
            case 1:
                return myArray
            default:
                myArray.sort(function(a, b){return a - b});
                return (myArray[myArray.length-1]+myArray[myArray.length-2])
       }   
    }
document.write(biggestSumOfTwoElements(myArray));
console.log(biggestSumOfTwoElements(myArray));