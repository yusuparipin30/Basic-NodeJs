/*Decision merupakan proses pemecahan masalah dalam bahasa pemrograman yang memiliki kondisi dan aksi.
Dengan bantuan decision, kita bisa membuat aksi berdasarkan kondisi tertentu.

Dalam bahasa pemrograman javascript decision terbagi menjadi dua jenis yaitu IF dan SWITCH.
 Keduanya memiliki fungsi yang hampir sama tergantung dari kasus, situasi, dan dari penggunaan  yang  paling mudah.

 /* Decision IF

Decision if cenderung membutuhkan operator pembanding dalam mendefinisikan kondisi tertentu sehingga membuat
decision menjadi sangat sesitif.

Decision IF sangat cocok digunakan untuk kondisi angka (INTEGER), dan kurang cocok untuk kondisi huruf (STRING). */
//contoh penggunaan dari decision if dan switch.*/
var kondisi ="lapar";

if (kondisi == "lapar"){
    console.log("Anda Harus Seger Makan!");
}else{
    console.log("Tdak Melakukan Apa-apa");
}
//output pada comandprom atau gitbash dengan mengetikan kode ini "node decision_if.js"
//jawabananya adalah :Anda Harus Seger Makan!

//Jika kondisinya diubah menjadi seperti berikut:


/* var kondisi="haus";
 
if(kondisi == "lapar"){
    console.log("Anda harus segera makan!");
}else{
    console.log("Tidak melakukan apa-apa");
} */

//Jika dirunning kembali maka akan tampil hasilnya sebagai berikut:
//"node decision_if.js"
//jawabannya adalah: Tidak melakukan apa-apa
/*Hal ini disebabkan oleh kondisi yang di set tidak sama dengan variable kondisi.
 Oleh sebab itu decision if akan menampilkan kondisi else.*/