// 1. Soru: Bir kullanıcının adını ve soyadını alıp, bunları "Soyadı, Adı" formatında birleştirmek istiyorsunuz. Ancak, ad ve soyad başlangıçta küçük harflerle girilmiş olabilir. İlk harfleri büyük harf yaparak bu formatlamayı nasıl gerçekleştirirsiniz?
// isimFormatla(ad, soyad); // "Yılmaz, Ahmet"

// !cevap1:
// isim formatlayacağız.bunun için function oluşturacağız.

function isimFormatla(ad, soyad){
   return `${soyad[0].toUpperCase() + soyad.slice(1)}, ${ad[0].toUpperCase() + ad.slice(1)}`;
 }
 const format = isimFormatla("ahmet","yılmaz")
console.log(format);

// 2. Soru: Bir metin içindeki türkçe karakterleri ingilizce karakterlerle değiştirip metni dönen js fonksiyonu yazınız?
// input :"Pijamalı hasta, yağız şoföre çabucak güvendi.";
// output : // Pijamali hasta, yagiz sofore cabucak guvendi.

// !cevap2:

function fixText(text){

   const chars = {
    'ç': 'c', 'Ç': 'C',
    'ğ': 'g', 'Ğ': 'G',
    'ı': 'i', 'İ': 'I',
    'ö': 'o', 'Ö': 'O',
    'ş': 's', 'Ş': 'S',
    'ü': 'u', 'Ü': 'U'
  };
  
  return text.replace(/[çÇğĞıİöÖşŞüÜ]/g, match => {
   console.log(match);
   return chars[match]});
  
  }
  
  function fixText2(text) {
   
  }

// 3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
// input : [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// output : [3, 4, 5]

// !cevap3:

function findCommon(arr1, arr2){
   let commonArr = [];
   for (let i = 0; i < arr1.length; i++) {
     if (arr2.includes(arr1[i])) {
       commonArr.push(arr1[i])
     }
   }
   return commonArr;
 }

// 4. Soru: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
// input : [1, 2, 3, 4, 5]
// output : 28

// !cevap4:

function sumOfEvenSquares(arr){
   return arr.map(num => num ** 2).filter(num => num % 2 === 0).map(num => num *2).reduce((acc, num) => acc + num, 0);
 }
 sumOfEvenSquares([1, 2, 3, 4, 5])


 // 5. Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).


// !cevap5:

 function reverseArray(arr){
   let reversedArr = [1,2,3,4];
   arr.forEach((item) => reversedArr.unshift(item));
   return reversedArr;
 }
