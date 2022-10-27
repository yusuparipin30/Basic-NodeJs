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

// const express = require('express');
// const app = express();
 
// //route untuk halaman home
// app.get('/',(req, res) => {
//   res.send('Welcome To Express');
// });
 
// //route untuk halaman about
// app.get('/about',(req, res) => {
//   res.send('This is about page');
// });
 
// app.listen(8000, () => {
//   console.log('Server is running at port 8000');
// });

//#2. menjalankan app.js dengan mengetikan perintah berikut pada terminal: node app.js

// Serving Static Files
// Express menyediakan middleware express.static untuk melayani file statis, seperti gambar, CSS, JavaScript, dan lain-lain.

// hanya perlu meneruskan nama direktori tempat  menyimpan file statis  ke middleware express.static untuk melayani file secara langsung.

// Sebagai contoh, untuk melayani file bootstrap.

// Bootstrap terdiri dari file CSS dan Javascript.

// download bootstrap pada situs resminya getbootstrap.com.

// Jika belum memiliki bootstrap, silahkan download terlebih dahulu.

// Kemudian, buat sebuah directory yg namanya “public”.

// Kemudian,menginstall template engine.

// Express mendukung banyak template engine.

// Pada kasus kali ini, menggunakan template engine handlebars.js

// Untuk menginstal handlebars, cukup dengan menjalankan perintah berikut pada terminal nodejs.

// npm install hbs --save

// Perintah diatas akan menginstal view engine handlebars secara instan pada project Anda.

// Selanjutnya, membuat folder views pada project directory. Kemudian, buat sebuah file dengan nama index.hbs.
//#1. Pertama, buka file index.hbs dengan texteditor kemudian ketikan kode html :
/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello World</title>
    <!--Load bootstrap.css file-->
    <link rel="stylesheet" href="css/bootstrap.css"/>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">This is a simple site, a simple from mfikri.com.</p>
            <hr class="my-4">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
        </div>
      </div>
    </div>
 
    <!--Load bootstrap.js file-->
    <script src="js/bootstrap.js"></script>
  </body>
</html>*/

//#2. Kedua, di file app.js, kemudian ubah menjadi seperti berikut:

//use path module
// const path = require('path');
// //use express module
// const express = require('express');
// //use hbs view engine
// const hbs = require('hbs');
// const app = express();
 
// //set dynamic views file
// app.set('views',path.join(__dirname,'views'));
// //set view engine
// app.set('view engine', 'hbs');
// //set public folder as static folder for static file
// app.use(express.static('public'));
// //route untuk halaman home
// app.get('/',(req, res) => {
//   //render file index.hbs
//   res.render('index');
// });
 
// //route untuk halaman about
// app.get('/about',(req, res) => {
//   res.send('This is about page');
// });
 
// app.listen(8080, () => {
//   console.log('Server is running at port 8080');
// });


/*Mengirim data ke view
Pada segmen ini, belajar bagaimana mengirim data ke view.

Tidak hanya itu, juga belajar bagaimana mengambil data dari URI parameter dan mengirimnya ke view.

#1. Pertama, buka file app.js, kemudian ubah menjadi seperti berikut:*/

//use path module
/*const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
const app = express();
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
//set public folder as static folder for static file
app.use(express.static('public'));
//route untuk halaman home
app.get('/',(req, res) => {
  //render file index.hbs
  res.render('index',{
    name : "Yusup Aripin"
  });
});
 
//route untuk halaman home dengan parameter name
app.get('/:name',(req, res) => {
  //render file index.hbs
  res.render('index',{
    name : req.params.name
  });
});
 
app.listen(8080, () => {
  console.log('Server is running at port 8080');
}); */

/*#2. Buka file index.hbs, kemudian ubah menjadi seperti berikut:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hello {{ name }}</title>
    <!--Load bootstrap.css file-->
    <link rel="stylesheet" href="css/bootstrap.css"/>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="jumbotron">
            <h1 class="display-4">Hello, {{ name }}</h1>
            <p class="lead">This is a simple site, a simple from mfikri.com.</p>
            <hr class="my-4">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </div>
        </div>
      </div>
    </div>
 
    <!--Load bootstrap.js file-->
    <script src="js/bootstrap.js"></script>
  </body>
</html>*/ 

/*buka browser ketikan URL berikut:

http://localhost:8080/
*/

/*Jika akses dengan url berikut:

http://localhost:8000/From Express Js*/


/*Menghandle POST request Body.
Pada segmen sebelumnya belajar bagaimana menghandle request melalui URI parameter.

Pada segmen kali ini, belajar bagaimana menghandle request melalui body.

Untuk menghandle POST request body, membutuhkan middleware body-parser.

Untuk menginstal body-parser, cukup dengan mengetikan perintah berikut pada terminal node.js:

npm install body-parser --save
Perintah diatas akan menginstall middleware body-parser secara instan ke project Anda.

Bagaimana menghandle POST request body?


#1. Pertama, buat sebuah view dengan nama form.hbs*/

//#2. Buka file form.hbs, kemudian ketikan kode berikut:

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Add New</title>
    <!--Load bootstrap.css file-->
    <link rel="stylesheet" href="css/bootstrap.css"/>
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Add New User</h2>
          <form action="/post" method="post">
            <div class="form-row">
              <div class="col">
                <input type="text" name="textname" class="form-control" placeholder="Name">
              </div>
              <div class="col">
                <button type="submit" class="btn btn-success">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
 
    <!--Load bootstrap.js file-->
    <script src="js/bootstrap.js"></script>
  </body>
</html>*/

//#3. Buka file app.js, kemudian ubah menjadi seperti berikut:

//use path module
const path = require('path');
//use express module
const express = require('express');
//use hbs view engine
const hbs = require('hbs');
//use bodyParser middleware
const bodyParser = require('body-parser');
const app = express();
 
//set views file
app.set('views',path.join(__dirname,'views'));
//set view engine
app.set('view engine', 'hbs');
 
app.use(bodyParser.urlencoded({ extended: false }));
//set public folder as static folder for static file
app.use(express.static('public'));
//route untuk halaman home
app.get('/',(req, res) => {
  //render file index.hbs
  res.render('index',{
    name : "M Fikri"
  });
});
 
//route untuk manampilkan form
app.get('/post',(req, res) => {
  //render file form.hbs
  res.render('form');
});
 
//route untuk submit form
app.post('/post',(req, res) => {
  //render file form.hbs
  res.render('index',{
    //ambil value dari textname
    name : req.body.textname
  });
});
 
app.listen(8001, () => {
  console.log('Server is running at port 8001');
});

//#4. Jalankan app.js dengan mengetikan perintah berikut pada terminal node.js:

//node app.js

//Kemudian, buka browser Anda kemudian ketikan URL berikut:

//http://localhost:8001/post

/*Pembahasan kali ini adalah tentang “belajar node js dari awal”.

Node.js adalah runtime Javascript yang dibangun di mesin Javascript V8 Chrome 
untuk memudahkan pembuatan aplikasi jaringan cepat dan skalabel.

Pada tutorial kali ini Anda telah belajar mulai dari: apa itu node.js,
 kenapa menggunakan node.js, instalasi node.js, basic webserver pada node.js,
  express framework, basic routing express, serving static files, 
mengirim data ke view, dan menghandle POST request body. */
