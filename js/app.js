let sayi = prompt("Lütfen bir sayı giriniz: ");
let toplam = 0;
for(let i =0; i<sayi.length; i++){
    let rakam = sayi.charAt(i);
    toplam+=rakam*rakam*rakam;
}

if(Number(sayi)==toplam){
    console.log("Armstrong sayısıdır.");
}else{
    console.log("Armstrong sayısı değildir");
}
document.write(3^3);