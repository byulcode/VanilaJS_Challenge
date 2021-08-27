//코드 챌린지 2번
const h1 = document.querySelector("body");

function handleResize() {
    const intViewportWidth = window.innerWidth;
    const firstClass = "first";
    const secondClass = "second";
    const thirdClass = "third";

    if(intViewportWidth < 600) {
        h1.classList.add(firstClass);
        h1.classList.remove(secondClass, thirdClass);
    }
    else if (intViewportWidth < 1000) {
        h1.classList.add(secondClass);
        h1.classList.remove(firstClass,thirdClass);
    }else {
        h1.classList.add(thirdClass);
        h1.classList.remove(firstClass,secondClass);
    }
}

window.addEventListener("resize", handleResize);