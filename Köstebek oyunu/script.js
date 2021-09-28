const startBtn = document.getElementById("start");
const scoreText = document.getElementById("score");
const kostebekler = document.querySelectorAll(".kostebek")

let oncekiKostebek;
let sureDoldu =false;
let skor =0;

function rastgelekostebek () {
    const sıra = Math.floor(Math.random() * kostebekler.length);
    const secilenKostebek = kostebekler[sıra];
    if(oncekiKostebek === secilenKostebek) {
        return rastgelekostebek();
    } else{
        oncekiKostebek = secilenKostebek;
    }
    return secilenKostebek;
}

function rastgeleSure (min, max) {
    const sure =Math.round(Math.random() * (max - min)) + min;
    return sure;
}

function yukari () {
    const kostebek = rastgelekostebek ();
    const sure = rastgeleSure(1000,1500);
    kostebek.classList.add("secilen");
    setTimeout(() => {
        kostebek.classList.remove("secilen");
        if(!sureDoldu) {
            yukari();
        }
    }, sure);
}


function oyunubaslat () {
    yukari();
    setTimeout(() => {
        sureDoldu = true;
    },15000)
}

function tikla (e) {
    if(e.target.classList.contains("secilen")){
        skor++;
        e.target.classList.remove("secilen");
    }
    scoreText.textContent = skor;
}

startBtn.addEventListener("click", () =>{
    oyunubaslat();
});

kostebekler.forEach ((kostebek) => {
    kostebek.addEventListener("click", tikla);
});