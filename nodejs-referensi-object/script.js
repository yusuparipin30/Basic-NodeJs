/*Apa itu referensi object?

Referensi Object atau Object References merupakan metode yang digunakan oleh node.js 
untuk menghandle perubahan pada artibut suatu object.

Jika terdapat nilai (value) pada atribut suatu object, maka semua nilai object yang 
terkait juga akan mengalami perubahan.

Sederhananya, seperti primary key dan foreign key pada relational database.
 Dimana jika terdapat perubahan data pada suatu tabel utama (master),
 maka akan mengalami perubahan juga pada tabel tamu (transaksi).*/

 /*var object1={
    "nama" : "Yusup Aripin",
    "umur" : 30,
 }
 console.log(object1); */

 /*Pada script diatas, penulis membuat sebuah object dalam format JSON,
  dan disimpan dalam sebuah variale dengan nama object1, dan terdiri dari dua artibut yaitu nama dan umur.
  Dimana, artibut nama berisi “Yusup Aripin” dan atribut umur berisi “30”.*/

 //Jika script diatas running, maka akan terlihat hasilnya sebagai berikut:
// { nama: 'Yusup Aripin', umur: 30 }


//#2#2. Kemudian lakukan perubahan pada script diatas menjadi seperti berikut:

var object1={
    "nama" :"Yusup Aripin",
    "umur" : 30,
}

var object2 = object1;
object2.umur = 25;

console.log(object1);
console.log("-----------------");
console.log(object2);

//dengan mengetik  node script.js maka hasilnya adalah 
/*{ nama: 'Yusup Aripin', umur: 25 }
-----------------
{ nama: 'Yusup Aripin', umur: 25 } */

// Node.js akan mengambil nilai terbaru dari suatu object sekaligus merubah nilai sebelumnya.

//ingin melakukan perubahan pada nilai tanpa merubah nilai sebelumnya adalah dengan memahami Object Factory pada node.js. 

