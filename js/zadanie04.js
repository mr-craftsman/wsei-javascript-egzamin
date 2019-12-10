const classElements = document.getElementsByClassName("sample_class");
const idElement = document.querySelectorAll("#sample_id");
const listElements = document.querySelectorAll(".sample_class_2 li");
const hrefElements = document.querySelectorAll("[href]");
const childrenElements = document.querySelectorAll(".sample_class_3 > *");

function getTagsOfElements(classElements)
    {
        var Arr1 = Array.from(classElements)
        return Arr1.map(a => a.tagName)
    }
console.log(getTagsOfElements(classElements));

function getClassesOfElement(idElement)
    {
        var Arr2 = Array.from(idElement)
        return Arr2.map(a => a.className)
    }
console.log(getClassesOfElement(idElement));

function getInnerTextsOfElements(listElements)
    {
        var Arr3 = Array.from(listElements)
        return Arr3.map(a => a.textContent)
    }
console.log(getInnerTextsOfElements(listElements));

function getAddressesOfElements(hrefElements)
    {
        var Arr4 = Array.from(hrefElements)
        return Arr4.map(a => a.outerHTML)
    }
console.log(getAddressesOfElements(hrefElements));

function getTagsOfElements(childrenElements)
    {
        var Arr5 = Array.from(childrenElements)
        return Arr5.map(a => a.tagName)
    }
console.log(getAddressesOfElements(childrenElements));