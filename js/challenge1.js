//코드 챌린지 1번
const title = document.querySelector("div");
title.innerText = "Hello";
const colors = ["Turquoise", "Blue", "Violet", "Tomato"];
const superEventHandler = {
  over: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  leave: function () {
    title.innerText = "The mouse is gone!";
    title.style.color = colors[1];
  },
  resize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  contextmenu: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.over);
title.addEventListener("mouseleave", superEventHandler.leave);
window.addEventListener("resize", superEventHandler.resize);
title.addEventListener("contextmenu", superEventHandler.contextmenu);
