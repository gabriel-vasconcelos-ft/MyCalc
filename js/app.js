
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen'); 
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase'); 
let clearbtn = document.querySelector('#clear'); 
let evaluate = document.querySelector('#evaluate');

const validacion1 = new RegExp('^[%*+\/]');
const validacion2 = new RegExp('[*-\/+.%]{2}');

let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})


buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        if (!btn.id.match('erase')) {
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');
            currentInput.className = 'currentInput';
            answerScreen.className = 'answerScreen';
            answerScreen.style.color = "rgba(150, 150, 150, 0.87)";

            if(validacion1.test(currentInput.innerHTML)){
                realTimeScreenValue.pop();

                currentInput.innerHTML = realTimeScreenValue.join('');
            }if(validacion2.test(currentInput.innerHTML)){
                realTimeScreenValue.pop();
                currentInput.innerHTML = realTimeScreenValue.join('');

            }if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }


        }

       
        if (btn.id.match('erase')) {

            currentInput.className = 'currentInput';
            answerScreen.className = 'answerScreen';
            answerScreen.style.color = "rgba(150, 150, 150, 0.87)";
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = realTimeScreenValue.join('');
        }
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

    })
})
