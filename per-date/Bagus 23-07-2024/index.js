console.log("Hello World");

// ctrl + /

/* 
    shift + alt + a
*/

let message;
message = "Hello";
console.log(message);

// 1. Luas persegi panjang
/* 
1. Deklarasikan var panjang persegi
2. Deklarasikan var lebar persegi
3. Deklarasikan var luas dengan operasi aritmatika panjang * lebar
4. print var luas
 */

let panjang = 10;
let lebar = 6;
let luas = panjang * lebar;
console.log(luas);

// 2. Keliling persegi panjang
/* 
1. Deklarasikan var panjang persegi
2. Deklarasikan var lebar persegi
3. Deklarasikan var luas dengan operasi aritmatika 2 * (panjang + lebar)
4. print var luas
*/

let panjang1 = 10;
let lebar1 = 7;
let keliling = 2 * (panjang1 + lebar1);
console.log(keliling);

// 3. Diamater lingkaran, keliling, dan luas
// 3.1. Diameter lingkaran
/* 
2. Deklarasikan var jari-jari(r) lingkaran
3. Deklarasikan var diameter dengan operasi aritmatika 2 * r
4. print var luas
*/

let r = 7;
let diameter = 2 * r;
console.log(diameter);

// 3.2. keliling lingkaran
/* 
1. Deklarasikan var phi(π)
2. Deklarasikan var diameter 
3. Deklarasikan var keliling lingkaran  dengan operasi aritmatika π * diameter
4. print var luas
*/

let phi = 3.14;
let diameter1 = 14;
let keliling1 = phi * diameter1;
console.log(keliling1);

// 3.3. luas lingkaran
/* 
1. Deklarasikan var phi(π)
2. Deklarasikan var jari-jari(r) lingkaran
3. Deklarasikan var luas lingkaran dengan operasi aritmatika π * r * r
4. print var luas
*/

let phi1 = 3.14;
let r1 = 7;
let luas1 = phi1 * r1 * r1;
console.log(luas1);

// 4. Cari sudut di segitiga, kalau diberikan 2 sudut yang diketahui
/* 
1. Deklarasikan var sudut pertama 
2. Deklarasikan var sudut kedua
3. Deklarasikan var sudut ketiga dengan operasi aritmatika 180° - (sudut1 + sudut2)
4. print var sudut3
*/

let sudut1 = 30;
let sudut2 = 40;
let sudut3 = 180 - (sudut1 + sudut2);
console.log(sudut3);

// 5. Cari perbedaan tanggal pada hari
/* 
1. Deklarasikan var tanggalAwal 
2. Deklarasikan var tanggalAkhir
3. Deklarasikan var bedaHari dengan operasi ${tanggalAwal.toDateString()}, ${tanggalAkhir.toDateString()}, ${bedaHari}
print var bedaHari
*/

const tanggalAwal = new Date("2023-01-01");
const tanggalAkhir = new Date("2023-12-31");
const bedaWaktu = tanggalAwal.getTime() - tanggalAkhir.getTime();
const bedaHari = bedaWaktu / (1000 * 3600 * 24);
console.log(
  `Perbedaan hari antara ${tanggalAwal.toDateString()} dan ${tanggalAkhir.toDateString()} adalah ${bedaHari} hari.`
);

// 6. Convert hari ke tahun, bulan, dan hari. cth : 400 -> Tahun, Bulan, Hari.
/* 
    1. deklarasikan var hari
    2. deklarasikan var bulan dengan Math.floor(hari / 30), Math.round untuk membulatkan hasil
    3. deklarasikan var tahun dengan hari / 365;
    4. print bulan
    5. print tahun
*/

const totalHari = 500;
const tahun = Math.floor(totalHari / 365);
let hariTersisa = totalHari % 365;
const bulan = Math.floor(hariTersisa / 30);
hariTersisa = hariTersisa % 30;
console.log(
  `${totalHari} hari setara dengan ${tahun} tahun, ${bulan} bulan, dan ${hariTersisa} hari.`
);
