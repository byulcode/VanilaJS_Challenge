const input_num = document.getElementById("range"); //사용자가 지정한 범위
const guess_num = document.getElementById("guess_num");
const button = document.getElementById("submit");

const show = document.getElementById("show");
const result = document.getElementById("result");

function buttonClick(event){
    event.preventDefault();
    
    const userNumber = guess_num.value; //user가 선택한 수
    const random_number = Math.ceil(Math.random() * input_num.value);   //machine이 선택한 수 
    show.innerHTML = `You chose: ${userNumber}, the machine chose: ${random_number}`;

   if(parseInt(userNumber) === parseInt(random_number)){
       result.innerText = "You won!";
   }else{
       result.innerText = "You lost!";
   }
}

button.addEventListener('click', buttonClick);

