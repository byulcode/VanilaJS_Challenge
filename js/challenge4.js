
const time_left = document.querySelector("h2#day_left");

function getTime() {
  const date = new Date();
  const xmas = new Date("2021-12-25:00:00:00"); //한국 시간 기준

  //남은 시간(밀리초)
  const secondleft = xmas - date;

  const seconds = Math.floor(secondleft / 1000) % 60;
  const minutes = Math.floor(secondleft / 1000 / 60) % 60;
  const hours = Math.floor(secondleft / 1000 / 60 / 60) % 24;
  const day = Math.floor(secondleft / 1000 / 60 / 60 / 24);

  time_left.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getTime(); //웹사이트 열자마자 시간이 뜨도록
setInterval(getTime, 1000);
