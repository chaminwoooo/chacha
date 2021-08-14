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