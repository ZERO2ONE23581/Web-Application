const bgArr = ["001.jpeg", "002.jpeg", "003.jpeg", "004.jpeg", "005.jpeg"];

const chosenBg = bgArr[parseInt(Math.random() * bgArr.length)];
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenBg}`;
document.body.appendChild(bgImg);

// const imgSrc = `url(img/${chosenBg})no-repeat center/cover`;
// document.body.style.background = imgSrc;
