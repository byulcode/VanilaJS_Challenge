//코드 챌린지 2번
const body = document.body;
document.getElementsByTagName()
document.querySelectorAll

const handleResize = function(event) {
    const intViewportWidth = window.innerWidth;
    const firstClass = "first";
    const secondClass = "second";
    const thirdClass = "third";

    if(intViewportWidth < 600) {
        body.classList.add(firstClass);
        body.classList.remove(secondClass, thirdClass);
    }
    else if (intViewportWidth < 1000) {
        body.classList.add(secondClass);
        body.classList.remove(firstClass,thirdClass);
    }else {
        body.classList.add(thirdClass);
        body.classList.remove(firstClass,secondClass);
    }
}

window.addEventListener("resize", handleResize);