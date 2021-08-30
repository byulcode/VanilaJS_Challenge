const input_num = document.querySelector("#input_num input"); //사용자가 지정한 범위
const guess_num = document.querySelector("#guess_num input");


const h2 = document.getElementById("c1");
const h22 = document.getElementById("c2");
const answer = document.getElementById("c3");

const HIDDEN_CLASSNAME = "hidden";


function updateValue(e){//값 실시간으로 업데이트 해주는 함수
    e.preventDefault();
   input_num.value = e.target.value;
}

function buttonClick(){
    const userNumber = guess_num.value; //user가 선택한 수
    const random_number = Math.ceil(Math.random() * input_num.value);   //machine이 선택한 수 
    h22.innerHTML = `You chose: ${userNumber}, the machine chose: ${random_number}`;

   if(parseInt(userNumber) === parseInt(random_number)){
       answer.innerText = "You won!";
   }else{
       answer.innerText = "You lost!";
   }
}

input_num.addEventListener('change', updateValue);


