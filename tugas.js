// Soal JS DASAR INTRO
// No. 1

var nama = "Ike listiani";
var AsalDaerah ="Boyolali";
var TglLahir =20;
var Umur =29;
var pekerjaan ="IRT";
    {
console.log("Nama: " + nama);
console.log("Asal Daerah: " + AsalDaerah);
console.log("Tanggal Lahir: " + TglLahir);
console.log("Umur: " + Umur);
console.log("Pekerjaan: " + pekerjaan);
}

// No 2 dan no 4

// i . var UserName = prompt("Masukan User Name:");
// ii. var AsalNegara = prompt ("Masukan Asal Negara");

// b. var KonfirmasiData = confirm ("Apakah data yang diisi sudah benar?");
// c. alert("Terimakasih sudah mengisi form");

// no5.
var dataDiri = {
    nama: "Nama: ",
    AsalDaerah: "Asal: ",
    TglLahir: "Tanggal Lahir: ",
    umur: "Umur Anda",
    pekerjaan: "Pekerjaan"
  };
  
  // Menampilkan data diri menggunakan console.log
  console.log("Data Diri:");
  console.log("Nama: " + dataDiri.nama);
  console.log("Asal Daerah: " + dataDiri.AsalDaerah);
  console.log("Tanggal Lahir: " + dataDiri.TglLahir);
  console.log("Umur: " + dataDiri.umur);
  console.log("Pekerjaan: " + dataDiri.pekerjaan);

// No 6


var penjumlahan = 25 + 10;
var perkalian = 100 * 2;
var pembagian = 99 / 2;
var modulus = 99 % 2;

console.log("Penambahan: " + penjumlahan);
console.log("Perkalian: " + perkalian);
console.log("Pembagian: " + pembagian);
console.log("Modulus: " + modulus);
//   =======================================================================================

// JS CONDITIONAL
// 1. 

let divisi  = 'HR';

if (divisi === "HR") {
    console.log("Saya seorang HRD, Tugas Saya Adalah Membuat kewenangan untuk karyawan.");
  } else if (divisi === "Accounting") {
    console.log("Saya seorang Accounting. Tugas saya adalah merapikan keuangan perusahaan.");
  } else if (divisi === "Programmer") {
    console.log("Saya seorang Programmer, tugas saya Adalah membuat aplikasi untuk perusahaan.");
  }

  console.log(divisi)
  
//   2. 

var a = 13;
var b = 7;

if (a > b) {
  console.log("Nilai a lebih besar dari b.");
} else if (a < b) {
  console.log("Nilai a lebih kecil dari b.");
} else {
  console.log("Nilai a sama dengan b.");
}

// no3


var hariKe = 7; 

switch (hariKe) {
  case 1:
    console.log("Hari Minggu");
    break;
  case 2:
    console.log("Hari Senin");
    break;
  case 3:
    console.log("Hari Selasa");
    break;
  case 4:
    console.log("Hari Rabu");
    break;
  case 5:
    console.log("Hari Kamis");
    break;
  case 6:
    console.log("Hari Jumat");
    break;
  case 7:
    console.log("Hari Sabtu");
    break;
  default:
    console.log("Nomor hari tidak valid");
}

// no4

var arah = "DoWN";
switch (arah) {
  case "UP":
    console.log("Karakter berjalan ke atas.");
    break;
  case "RIGHT":
    console.log("Karakter berjalan ke kanan.");
    break;
  case "BOTTOM":
    console.log("Karakter berjalan ke bawah.");
    break;
  case "LEFT":
    console.log("Karakter berjalan ke kiri.");
    break;
  default:
    console.log("Arah tidak valid.");
}
console.log(arah)
// =============================================================================

