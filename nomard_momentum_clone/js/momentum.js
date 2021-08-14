// clock 
const clock = document.querySelector('#clock');

// 함수 정의
function GetClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 함수 선언 : 선언하지 않으면 동작하지 않는다.
GetClock();
setInterval(GetClock, 1000);

//background-image
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `../images/${chosenImage}`;

document.body.appendChild(bgImage);
bgImage.classList.add("bg-img");
