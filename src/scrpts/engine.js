const animalsImages = [
   "src/images/arara.jpg",
   "src/images/arara.jpg",
   "src/images/girafa.jpg",
   "src/images/girafa.jpg",
   "src/images/sapo.jpg",
   "src/images/sapo.jpg",
   "src/images/tigre.jpg",
   "src/images/tigre.jpg",
   "src/images/raposa.jpg",
   "src/images/raposa.jpg",
   "src/images/zebra.jpg",
   "src/images/zebra.jpg",
];
let openCards = [];

let shuffleAnimalsImages = animalsImages.sort(()=> (Math.random() > 0.5 ? 2 : -1));

for( let i=0; i < animalsImages.length; i++ ){
   let box = document.createElement("div");
   box.className = "item";
   let img = document.createElement("img");
   img.src = shuffleAnimalsImages[i];
   img.className = "imgCard";

   box.appendChild(img);
   box.onclick = handleClick;
   document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
function checkMatch() {
    const img1 = openCards[0].querySelector("img");
    const img2 = openCards[1].querySelector("img");

    if (img1.src === img2.src) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards = [];

    if (document.querySelectorAll(".boxMatch").length === animalsImages.length) {
        alert("Eh você acertou todos os pares de cartas!🥇🎉🏆");
    }
}
   
}
