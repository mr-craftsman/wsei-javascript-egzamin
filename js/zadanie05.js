const getButtons = document.getElementsByTagName("button");
var allButtons = Array.from(getButtons);


allButtons.forEach(function(button) 
    {
        button.addEventListener("click", function() {
            document.getElementById("container").innerHTML = button.getAttribute("data-text");
        });
    });


console.log(allButtons);
