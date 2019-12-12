document.addEventListener("DOMContentLoaded", function(readyList) 
    {
        var readyList = document.getElementById("shopping-list");
        document.getElementById("button-1").addEventListener("click", function(newContent)
        {
            var newContent = document.createElement("li");
            readyList.appendChild(newContent).innerHTML = "chleb";
        });
        document.getElementById("button-2").addEventListener("click", function()
        {
            
            readyList.removeChild(readyList.childNodes[readyList.childNodes.length-1]); 

        });
        document.getElementById("button-3").addEventListener("click", function(duplicate)
        {
            var duplicate = readyList.children[1].cloneNode(true);
            readyList.appendChild(duplicate);
        });

    })
