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

const text = "Pijamalı hasta, yağız şoföre çabucak güvendi."

function replaceToEngText (str){
   
}

// 3. Soru: İki sayı dizisi içindeki ortak elemanları bulup yeni bir dizi oluşturun?
// input : [1, 2, 3, 4, 5], [3, 4, 5, 6, 7]
// output : [3, 4, 5]



// 4. Soru: Soru: Bir dizideki sayıların karelerinden çift sayıların iki katlarının toplamını bulun.
// input : [1, 2, 3, 4, 5]
// output : 28


// 5. Soru: Verilen bir diziyi tersine çevirin, ancak yalnızca forEach kullanarak yapın (reverse() kullanmadan).
