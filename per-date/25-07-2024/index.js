// 1. Membuat function untuk membuat segitiga
/* 
 1. Buat fuction dengan nama segitigaAngka
 2. "let angka" berfungsi untuk menyimpan angka yang akan di iniliasi mulai dari angka 1
 3. Loop baris (i) berfungsi untuk mengatur jumlah baris yang dicetak
 4. Loop baris (j) berfungsi untuk mengatur jumlah angka yang akan di cetak pada baris (i)
*/
function segitigaAngka(baris) {
  let angka = 1; // Inisialisasi angka mulai dari 1
  for (let i = 1; i <= baris; i++) {
    let segitiga = "";
    for (let j = 1; j <= i; j++) {
      // Tambahkan angka ke dalam segitiga, format dengan dua digit
      segitiga += angka.toString().padStart(2, "0") + " ";
      angka++; // Increment angka
    }
    console.log(segitiga.trim());
  }
}
// Contoh penggunaan
segitigaAngka(4);

// 2. Membuat function kelipatan
/* 
 1. Buat fuction dengan nama kelipatan
 2. Buat loop lalu buat fungsi "if" dengan beberapa kondisi
 3. angka yang merupakan kelipatan 3 dan 5 akan di cetak dengan "tiga lima"
 4. angka yang merupakan kelipatan 3 akan di cetak dengan "tiga"
 5. angka yang merupakan kelipatan 5 akan di cetak dengan "lima"
*/
function kelipatan(N) {
  for (let i = 0; i <= N; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("TIGALIMA");
    } else if (i % 3 === 0) {
      console.log("TIGA");
    } else if (i % 5 === 0) {
      console.log("LIMA");
    } else {
      console.log(i);
    }
  }
}

let N = 9;
kelipatan(N);

// 3. Membuat function untuk menghitung BMI
/* 
 1. Buat fuction dengan nama Body Mass Index (BMI)
 2. Deklarasikan rumus untuk menghitung BMI yaitu "const bmi = weight / (height * height);"
 3. Menampilkan beberapa fungsi dengan kondisi yang berbeda
 4. Deklarasikan hasil dari Body Mass Index (BMI)
*/
function BMI(heightCm, weightKg) {
  // Konversi tinggi dari cm ke meter
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) {
    return "berat kurang";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "ideal";
  } else if (bmi >= 25.0 && bmi < 29.9) {
    return "kelebihan berat badan";
  } else if (bmi >= 30.0 && bmi <= 34.9) {
    return "sangat kelebihan berat badan";
  } else {
    return "obesitas";
  }
}
// Contoh penggunaan
let height = 168.5; // Tinggi dalam centimeter
let weight = 70; // Berat dalam kilogram
let bmiSaya = BMI(height, weight);
console.log(bmiSaya);

// 4. Membuat function untuk menghilangkan angka ganjil dan mengembalikan array yang berisi angka genap
/* 
 1. Buat fuction dengan nama arrayOfNumber
 2. metode "filter()" berfunsi untuk menghasilkan array baru yang berisikan
    elemen baru yang sudah lulus uji dari fungsi callback
 3. fungsi "callback" akan memisahkan elemen yang memiliki nilai true dan false
    setelah itu elemen yang mengembalikan nilai true dimasukkan ke dalam array baru
 4. Deklarasikan hasil dari arrayOfNumber
*/
function arrayOfNumber(arr) {
  let evenNumbers = arr.filter(function (number) {
    return number % 2 === 0;
  });
  return evenNumbers;
}

let normalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArray = arrayOfNumber(normalArray);
console.log(evenArray);

// 5. Membuat function untuk mengubah string menjadi array of string
/* 
 1. Buat fuction dengan nama arrayString
 2. Metode "split()" menghasilkan substring dari proses pemisahan 
  yang di kenali sebagai "Delimeter"
 3. Deklarasikan hasil dari arrayOfString
*/
function stringToArray(str, delimiter) {
  // Jika delimiter tidak diberikan, gunakan spasi sebagai default
  delimiter = delimiter || " ";
  return str.split(delimiter);
}

let contohString = "Ini adalah contoh string";
let arrayOfStrings = stringToArray(contohString);
console.log(arrayOfStrings);
