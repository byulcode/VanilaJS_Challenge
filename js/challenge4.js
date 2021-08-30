const input_num = document.querySelector("#input_num input"); //사용자가 지정한 범위
const guess_num = document.querySelector("#guess_num input");
const h2 = document.getElementById("c1");
const h22 = document.getElementById("c2");
const HIDDEN_CLASSNAME = "hidden";




function updateValue(e){//값 실시간으로 업데이트 해주는 함수
    e.preventDefault();

   const max = e.target.value;
   h2.innerText = max;
   
   const random_number = Math.ceil(Math.random() * max);
   h22.innerHTML = `You chose${random_number}`;
}


input_num.addEventListener('change', updateValue);


