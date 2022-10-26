//awal
/*const http = require('http');
 
http.createServer(function(req,res){
  res.writeHead(200,{
    "Content-Type" : "text/html"
  });
  res.end("Hello World");
}).listen(8000);
 
console.log('Server is running at port 8000');  */

//buka browser ketik URL "http://localhost:8000" maka outputnya adalah: Hello World

// selanjutnya  membuat package.json,membuatnya cukup dengan mengetikan perintah berikut pada terminal nodejs.

// npm init
// Perintah diatas akan membuat file package.json ke project Anda secara otomatis.


/*Selanjutnya  menginstall express. 
Untuk menginstal express cukup dengan mengetikkan perintah berikut pada terminal node js.

npm install express --save*/


/*Basic Routing Express
Express memberikan kemudahan dalam mendefinisikan routes pada aplikasi berbasis node.js.

Contoh:
mempunyai 2 route yaitu home dan about.

Dimana route home akan menampilkan text “Welcome to Express” 
dan route about akan menampilkan text “This is about page”.*/

//#1. pada file app.js  ini yang telah dibuat sebelumnya, kemudian mengubah menjadi seperti berikut:

const express = require('express');
const app = express();
 
//route untuk halaman home
app.get('/',(req, res) => {
  res.send('Welcome To Express');
});
 
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('This is about page');
});
 
app.listen(8001, () => {
  console.log('Server is running at port 8000');
});

//#2. menjalankan app.js dengan mengetikan perintah berikut pada terminal: node app.js


