// Thay đổi nội dung búc thư ở đây
var letterContent =" Kkk Dear my secret recipient. Hy vọng rằng b sẽ có một mùa Christmas thật vui vẻ nha. Hope that b sẽ thích món quà của t nha kkk và mong rằng năm sau mình vẫn sẽ chơi trò này cùng nhau nha kkk. Me ri Chịt Mợt. Đừng để mấy đứa kia biết nha kkkk💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})

const snowContainer = document.querySelector('.snow-container');

function createSnowflakes(num) {
 for (let i = 0; i < num; i++) {
 const snowflake = document.createElement('div');
 snowflake.classList.add('snowflake');

 // Set random size
 const size = Math.random() * 20 + 10; // size between 10px to 30px
 snowflake.style.fontSize = `${size}px`;

 // Set random position
 const leftPosition = Math.random() * 100; // random horizontal position
 snowflake.style.left = `${leftPosition}vw`;

 // Set random animation duration
 const speed = Math.random() * 10 + 5; // speed between 3s to 8s
 snowflake.style.animationDuration = `${speed}s`;

 // Set random horizontal movement
 const horizontalMovement = (Math.random() - 0.5) * 50; // random horizontal movement
 snowflake.style.transform = `translateX(${horizontalMovement}px)`;

 // Set the snowflake character
 snowflake.innerHTML = '&#10052;';

 // Set random color for the snowflake
 snowflake.style.color = `hsl(${Math.random() * 360}, 100%, 100%)`; // Random color in HSL range

 snowContainer.appendChild(snowflake);

 // Remove snowflakes after it falls
 snowflake.addEventListener('animationend', () => {
 snowflake.remove();
 });
 }
}

// Set the amount of snow
const amountSnow = 20; // amount of snow

// Create snow
createSnowflakes(amountSnow);

// Create new snow every second
setInterval(() => {
createSnowflakes(1);
}, 2000);
