// Ashynchronus procces
// const a = 100000;
// for (let i = 0; i < a; i++) {
//   console.log("iterasi sedang berjalan");
// }
// iterasi sedang berjalan 100000x

// *dari topik asynchronus proses sebelumnya,kita dapat mengidentifikasi permasalahan pemrograman yang berjalan secara synchronous.

// *Untuk mengatasi masalah tersebut,kita membutuhkan cara agar program dapat  menerima perintah selanjutnya tanpa menunggu satu baris perintah selesai  dijalankan.

// *Bagaimana fungsi yang bersifat shynchronous bisa berjalan dalam javascript yang  bersifat shynchronous?

// *Dukungan untuk menjalankan fungsi ashynchronous datang dari fitur eksternal yang  disediakan runtime environment.Dalam konteksnya di browser,terdapat standarisasi  fungsi tambahan melalui Web API.

// *Secara sederhana,browser menyediakan pipa tambahan sehingga dengan adanya jalur  kita dapat menjalankan dua perintah di waktu bersamaan.

// *Dalam proses belajar ini,kita dapat menyebut pipa tambahan tersebut sebagai queue  stack.

// |call stack| |queue stack|

// *Diluar call stack terdapat event loop yang berfungsi mengatur alur kerja agar JS  dapat mendukung proses ashynchronous.

// function setTimeOut - menerima 2 argumen
function logAfterTwoSecond() {
  console.log("hello world");
}
setTimeout(logAfterTwoSecond, 2000); //-> '2000ms' - juga bisa
// ---menunggu 2 detik---> eventloop -> setTimeout -> callstack -> callbackqueue

// contoh setTimeOut pada console di browser:
function logAfterTwoSecont() {
  console.log(1);
}
// result
// undefined    -> tapi terekam di web browser

// kita panggil lagi
console.log(2);
setTimeout(logAfterTwoSecont, 2000);
console.log(3);
// result
// 2
// 3
// delay 2 detik
// 1

// Contoh lain async callback : event listener
function onButtonClick() {
  alert("button berhasil diclick");
  console.log("button berhasil di click");
}
const buttonElement = document.getElementById("button");
buttonElement.addEventListener("click", onButtonClick);
// cek inspect- dan lihat popup
