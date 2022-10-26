/*Module merupakan suatu file, library, atau helper yang dibutuhkan untuk menjalankan
 suatu fungsi tertentu. Dalam pembuatan suatu aplikasi, kita tidak bisa terlepas dari yang
  namanya module, dikarenakan sangat sulit mengembangkan suatu aplikasi hanya dengan menggunakan suatu file.

Untuk memanggil module pada PHP biasanya menggunakan fungsi include, require, ataupun require_once.  Sedangkan pada node.js hanya menggunakan fungsi require.

Module terbagi menjadi dua macam yaitu Module bawaan node.js dan module buatan sendiri. 
Untuk memanggil module bawaan node.js dapat dilakukan dengan cara require(‘nama_module’).
 Sedangkan untuk memanggil module buatan sendiri dapat dilakukan dengan cara require(‘./nama_module’). 
 Jika suatu module diletakkan dalam subfolder, maka dapat di panggil dengan cara require(‘./nama_folder/nama_module’).

 */ 

    var methods = {};
    
    methods.function_satu=function(){
        console.log("Ini Adalah Function Satu");
    }
    methods.function_dua=function(){
        console.log("Ini Adalah Function Dua");
    }

    exports.data=methods;

    /*ada script diatas saya membuat sebuah variabel dengan nama methods, dimana variabel
     methods ini berfungsi untuk menampung object. Dimana objectnya berisi function yaitu 
     function_satu dan function_dua. Agar module dapat digunakan diluar kelas (Public), 
     maka module harus di exports. Pada script diatas saya meng-exports-nya dengan perintah exports.
     data=methods. Dimana methods adalah variable dan data merupakan 
    nama pemanggilan untuk semua fungsi yang ada pada variable methods dari luar kelas.*/
    
    /*#2. Buat sebuah javascript file lagi dengan nama app.js didalam folder yang sama.
     Dimana file app.js ini akan di gunakan sebagai
     file induk dari tutorial kali ini. Kemudian ketikan script pada app.js.*/
