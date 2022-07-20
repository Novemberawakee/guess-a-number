let text = ["Guess what number is on my mind?",
    "Oops! Type a number from 1 to 25.",
    "You need to type a number.",
    "Try a smaller number.",
    "Try a bigger number.",
    "WIN!!!"]

let i = 0;
let speed = 70;

function type() {
    if (i < text[0].length) {
        document.querySelector('#par').textContent += text[0].charAt(i);
        i++;
        setTimeout(type, speed);
    }
}
type();

const input = document.querySelector('#guess');
const button = document.querySelector('#btn');
const answer = Math.floor(Math.random()*25)+1;
button.addEventListener('click', play);
input.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        play();
    }
})


function play() {
    const userNumber = document.querySelector('#guess').value;
    document.querySelector('#par').textContent = " ";
    i=0;
    if (userNumber < 1 || userNumber > 25) {
        function typeOne() {
            if (i < text[1].length) {
                document.querySelector('#par').textContent += text[1].charAt(i);
                i++;
                setTimeout(typeOne, speed);
            }
        }
    typeOne();
    }
                
    else if (isNaN(userNumber)) {
        function typeTwo() {
            if (i < text[2].length) {
                document.querySelector('#par').textContent += text[2].charAt(i);
                i++;
                setTimeout(typeTwo, speed);
            }
        }
    typeTwo();
    }

    else {
        if (userNumber > answer) {
            function typeThree() {
                if (i < text[3].length) {
                    document.querySelector('#par').textContent += text[3].charAt(i);
                    i++;
                    setTimeout(typeThree, speed);
                }
            }
            typeThree();
            }
        
        else if (userNumber < answer) {
            function typeFour() {
                if (i < text[4].length) {
                    document.querySelector('#par').textContent += text[4].charAt(i);
                    i++;
                    setTimeout(typeFour, speed);
                }
            }
            typeFour();
            }

        else {
            function typeFive() {
                if (i < text[5].length) {
                    document.querySelector('#par').textContent += text[5].charAt(i);
                    i++;
                    setTimeout(typeFive, speed);
                }
            }
            typeFive();
            }
        }
    }




