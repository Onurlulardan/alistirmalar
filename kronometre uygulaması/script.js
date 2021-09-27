const dakika = document.getElementById("dakika");
const saniye = document.getElementById("saniye");

//kutucuklar
const secilendk = document.getElementById("secilendakika");
const secilensn = document.getElementById("secilensaniye");

//butonlar
const baslatbutonu = document.getElementById("baslat");
const sifirlabutonu =document.getElementById("sifirla");

let dur = false;

secilendk.addEventListener("change", () => {
    dakika.textContent = secilendk.value;
});

secilensn.addEventListener("change", () => {
    saniye.textContent = secilensn.value < 10 ? "0" + secilensn.value: secilensn.value;
});

baslatbutonu.addEventListener("click", starTimer);
sifirlabutonu.addEventListener("click", () => {
    dur = true;
    dakika.textContent = "00";
    saniye.textContent = "00";
    secilendk.value = "00";
    secilensn.value = "00";
});

function starTimer(){
    let dk = dakika.textContent;
    let sn = saniye.textContent;

    const interval =setInterval(() => {
        sn--;
        sn = sn < 10 ? "0" + sn : sn;
        if(sn == "0-1") {
            dk--;
            sn= 59;
        }
        console.log(sn);
        if((dk == 00 && sn == 00) || (dk == 00 && sn == 00)){
            clearInterval(interval);
            window.alert("Süre doldu!");
            secilendk.value = "00";
            secilensn.value = "00";
        }

        if(dur) {
            clearInterval(interval);
            return;
        } 
        dakika.textContent =  dk;
        saniye.textContent = sn;
    },1000);
};

