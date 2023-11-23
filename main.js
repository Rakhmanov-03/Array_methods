// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang
// oshir1ga([0, 1, 2, 3]) ᔍ [1, 2, 3, 4]
// oshir1ga([2, 4, 6, 8]) ᔍ [3, 5, 7, 9]
// oshir1ga([-1, -2, -3, -4]) ᔍ [0, -1, -2, -3]
// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling.
// var ism = "Donyor";
// var familiya = "Olimov";
// var natija; -> sizning kodingiz.
// Natija: “Donyor Olimov” ko’rinishida bo’lsin.
// var ism = "Donyor";
// var familiya = "Olimov";
// var natija = `${ism} ${familiya}`;

// console.log(natija);
// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false
// function uzunlikJuftmi() {
//     let str=+prompt("so'zni kiriting")
//     let uzunlik = str.length;
//     if(uzunlik % 2 == 0){
// console.log("true");
//     }
//     else{
//         console.log("false");
//     }
//   }
// uzunlikJuftmi();  
// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.
// function daraja(){
//     let son1=+prompt("1-sonni kiriting")
//     let son2=+prompt("2-sonni kiriting")
//     let natija=Math.pow(son1, son2)
//     console.log(natija);
// }
// daraja();
// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.
// function element(){
//     let arr=[1,2,3,4,5]
//     console.log(arr.length);
// }
// element();
// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.
// function kabisa() {
//     let yil=+prompt("yilni kiriting")
//     if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
// kabisa();
// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
// harfisiz qaytarib bersin.
//   function birinchiHarf(){
//     let soz=+prompt("so'zni kiriting")
//     if(soz.length == 0){
//         console.log("so'z kiritilmagan");
//     }
//     let birinchi=soz.charAt(0)  
//     console.log(birinchi);
//   }
//   birinchiHarf();
// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya
// yasang.
// function booleanTeskari() {
//     let qiymat=prompt("qiymatni kiriting")
//     console.log(!qiymat);
//   }
// booleanTeskari();
// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
// qaytaradi, agar toq bo’lsa “toq” qaytarsin.
// function ToqJuft(){
//     let son=+prompt("sonni kiriting")
//     if(son % 2 == 0){
//         console.log("Juft");
//     }
//     else{
//         console.log("Toq");
//     }
// }
// ToqJuft();
// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
// qavatiga qarab ularning soni oshib boradi.
// Agar funskiyaga qutilarning qavati berilsa, nechta quti turganini
// qaytarsin.
// Namuna:
// qutilar(1) ᔍ 1
// qutilar(2) ᔍ 4
// qutilar(0) ᔍ 0
// function box(){
//     let qavat=+prompt("qavatini kiriting")
//     console.log(qavat**2);
// }
// box();
// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.
// function massiv(){
//     let qiymat=+prompt("qiymatni kiriting")
//     if(qiymat.length == 0){
//         console.log("massiv bo'sh");
//     }
//     let birlashish=qiymat.join();
//     console.log(birlashish);
// }
// massiv();
// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin
// function massiv(){
//     let son1=[1,2,3,4]
//     let son2=[,5,6,7,8]
//     let birlashish=`${son1} ${son2}`
//     console.log(birlashish);
// }
// massiv();
// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin.
// function indeksniTop(element, massiv) {
//     var indeks = massiv.indexOf(element);
//     return indeks;
//   }
//   indeksniTop();
// 66.Quyidagi namunani kuzatgan holda funksiya yasang
// namuna([1, 2, 3, 4, 5]) ᔍ 15
// namuna([-1, 0, 1]) ᔍ 0
// namuna([0, 4, 8, 12]) ᔍ 24
// function massiv(){
//     arr=[1,2,3,4,5,6,7,8,9]
//     jami=0
//     for(let i=0;i<arr.length; i++ ){
//         console.log(jami+=i);
//     }
// }
// massiv();
// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida
// qaytarilsin
// function raqam(){
//     let nums=["nol","bir","ikki","uch","to'rt","besh","olti","yetti","sakkiz","to'qqiz"]
//     let number=+prompt("sonni kiriting")
//     console.log(nums[number])
// }
// raqam();
// function sonlarniStringgaOgirish(massiv) {
//     for (let i = 0; i < massiv.length; i++) {
//       if (typeof massiv[i] === 'number') {
//         massiv[i] = massiv[i].toString();
//       }
//     }
//     return massiv;
//   }
// sonlarniStringgaOgirish();
// 70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
// Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasin
// function kubik() {
//     let qatorlar=+prompt("qatorni kiriting")
//     let kubikchalar = (qatorlar * qatorlar)*6;
//      console.log(kubikchalar);
//   }
// kubik();
// 71.Oddiy avtomobil 4ta yo’lovchi va 1ta havdovchini o’z ichiga
// olishi mumkin. Bundan kelib chiqib safarga chiqish uchun
// odamlar soni aniq bo’lsa funksiya kamida nechta avtomobil
// kerakligini qaytarsin.
// function mashina(){
//     let odam=+prompt("odamlar sonini kiriting")
//     let mashina=odam % 5
//     console.log(mashina + " mashina kerak"); 
// }
// mashina();
// 72.Funksiya tekshirisin, agar unga berilgan stringda bo’sh joy
// mavjud bo’lsa true qaytarsin, aks holda false.
// function borBoShJoy() {
//     let string=prompt("sozni kiriting")
//     if (string.includes(" ")) {
//       console.log("true");
//     } else {
//      console.log("false");
//     }
//   }
// borBoShJoy();
// 73.Funksiya biron qutining olchamlari ma’lumotlarini object
// sifatida qabul qiladi. funksiya ushbu qutining hajmini qaytarib
// bersin. Hajm = Balandlik * Eni * Uzunlik
// function Hajm(){
//     let balandlik=+prompt("balandlikni kiriting")
//     let eni=+prompt("enini kiriting")
//     let uzunlik=+prompt("uzunligini kiriting")
//     Hajm=balandlik*eni*uzunlik
//     console.log(Hajm);
// }
// Hajm();
// 76.Funskiya string va number qabul qiladi. Funksiya ushbu
// stringni berilgan son miqdoricha qayta-qayta yozib natijani
// string ko’rinishida qaytarsin.
// function takrorlash(string, miqdar) {
//     let natija = '';
//     for (let i = 0; i < miqdar; i++) {
//       natija += string;
//     }
//     return natija;
//   }
//   takrorlash();
// 77.Funksiyaga so’z kiritilsa, agar ushbu so’z ko’plikda bo’lsa
// funksiya true qaytarsin, aks holda false.
// function koPlikdaQiladimi() {
//     let soz=+prompt("so'zni kiriting")
//     console.log(soz.length > 1);
//   }
// koPlikdaQiladimi();
// 78.Funksiya string qabul qiladi. Ushbu funksiya ushbu stringni
// bosh va oxirgi harflarini birlashtirgan stringni qaytarsin.
// function birlashtirish(string) {
//     // Stringni bosh va oxirgi harflarini birlashtirib qaytarish
//     if (string.length < 2) {
//       return string; 
//     } else {
//       let boshHarf = string[0];
//       let oxirgiHarf = string[string.length - 1];
//       return boshHarf + oxirgiHarf;
//     }
//   }
// 80.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// ahvol("happy") ᔍ "Today, I am feeling happy"
// ahvol("sad") ᔍ "Today, I am feeling sad"
// ahvol() ᔍ "Today, I am feeling neutral"
// function string(){
//     let soz=prompt("so'zni kiriting")
//     console.log("Today, I am feeling " + soz);
// }
// string();
  











