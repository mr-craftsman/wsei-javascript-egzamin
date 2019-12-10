var n = Math.floor((Math.random()*100)+1);
//(UP) I`ve decided to generate random numbers for variable n
function getSqrt()
    {
        return Math.sqrt(n);
    }

document.write("Zadana liczba to:"+ n + ", a jej pierwiastek 2 stopnia to " + getSqrt());
/*(UP) I know it is advised NOT to use document.write method, 
except for testing, so I used it here on purpose, and with sane mind */
console.log(getSqrt());