// DEĞİŞKELER 

let min = 1;
let max = 100 ;
let kazanansayi = rastgeleKazananSayi(min,max)
// let kazanansayi = 2;
let tahminHakkı = 5;

// HTML ELEMANLARIN DEĞERİNİ AKTARMA 

const minSayi = document.querySelector(".min");
const maxSayi = document.querySelector(".max");
const tahminInput = document.querySelector("#tahmin-input");
const tahminbtn = document.querySelector("#tahmin-btn");
const oyun=document.querySelector(".oyun")
const mesaj = document.querySelector(".mesaj")

// MİN VE MAX ELEMAN SAYI BELİRLEME 

minSayi.textContent = min;
maxSayi.textContent = max;

// Oyun Bitince yeniden Başla

oyun.addEventListener("mousedown",function(e){
    if(e.target.className === "tekrar-oyna"){
        window.location.reload();
    }
});

// oyuna başlama
tahminbtn.addEventListener("click",function(){
    const tahninEdilenSayi = tahminInput.value;
    if(tahninEdilenSayi === "" || tahninEdilenSayi< min || tahninEdilenSayi > max){
    mesajYazdir("HATA!! Sayı Girişi Olmadı veya Sayı Değerleri arasında Giriş Yapıldı","red");
    }else if(tahninEdilenSayi == kazanansayi){
        oyunBitti(false,"TEBRİKLER DOĞRU BİLDİNİZ")
    }else{
        tahminHakkı -= 1;
        if(tahminHakkı == 0){
            oyunBitti(true,`TAHMİN HAKKI KALMADI.. KAZANAN SAYI : ${kazanansayi}`,);

        }else{
            mesajYazdir(`TAHMİN HAKKINIZ ${tahminHakkı} KALDI.`,"red");
        }
    }
})

// mesaj fonksiyonu

function mesajYazdir(msj,color){
    // mesaj renk değişimi
    mesaj.style.color= color;
    
    // mesaj parametresi

    mesaj.textContent = msj;
}


// oyun Bitti fonksiyonu

function oyunBitti(kontrol,msj){
    let color;

    kontrol == true ? color ="red" : (color="lime");

    tahminInput.disabled = true;
    // tahminbtn.disabled = true;
    tahminInput.style.borderColor = color;

    mesajYazdir(msj,color);

    // BUTON DEĞİŞTİR
    tahminbtn.textContent = "Tekrar Oyna";
    tahminbtn.className ="tekrar-oyna";
};

// RASTGELE SAYI ÜRET. 
function rastgeleKazananSayi(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
};