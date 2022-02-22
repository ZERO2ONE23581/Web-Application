const bgArr = ["001.jpeg", "002.jpeg", "003.jpeg", "004.jpeg", "005.jpeg"];

const chosenBg = bgArr[parseInt(Math.random() * bgArr.length)];
console.log(chosenBg);
const imgSrc = `url(img/${chosenBg})no-repeat center/cover`;
document.body.style.background = imgSrc;
