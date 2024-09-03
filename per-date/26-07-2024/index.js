// A.1. Fungsi untuk mendapatkan nilai terendah, tertinggi, dan rata-rata dalam array
// Dengan fungsi sort
function denganSort(arr) {
  if (arr.length === 0) {
    return { min: null, max: null, avg: null };
  }
  arr.sort();

  min = arr[0];
  max = arr[arr.length - 1];

  let Jumlahtotal = 0;
  for (i = 0; i < arr.length; i++) {
    Jumlahtotal += arr[i];
  }
  const avg = Jumlahtotal / arr.length;

  return { NilaiMin: min, NilaiMax: max, rataRata: avg };
}

let arr1 = [5, 3, 9, 1, 7];
console.log(denganSort(arr1));

// Tanpa fungsi sort
function tanpaSort(arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current < min) {
      min = current;
    }
    if (current > max) {
      max = current;
    }
    sum += current;
  }
  let avg = sum / arr.length;
  return { min, max, avg };
}

// Contoh penerapan
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const hasil = tanpaSort(arr);
console.log("Nilai Minimum:", hasil.min);
console.log("Nilai Maksimum:", hasil.max);
console.log("Nilai Rata-rata:", hasil.avg);

// A.2. Fungsi yang mengambil array kata dan mengembalikan string dengan menggabungkan kata-kata
//    dalam array, dipisahkan dengan koma dan - kata terakhir - dengan 'dan'
function combineWords(arr) {
  let hasil = "";
  for (i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      hasil += "dan " + arr[i];
    } else {
      hasil += arr[i] + ", ";
    }
  }
  return hasil;
}
// Contoh penerapan
let kata = ["Budi", "Rusdi", "Tono", "Yaya"];
console.log(combineWords(kata));

// A.3. Fungsi untuk membagi string dan mengubahnya menjadi array kata
function stringToArray(string) {
  return string.split(" ");
}

// Contoh penerapan
let str = "Halo Sayang";
console.log(stringToArray(str));

// A.4. Fungsi untuk menghitung setiap elemen dalam posisi yang sama dari dua array bilangan bulat
function sumArrays(arrA, arrB) {
  const hasiltambah = [];
  if (arrA.length !== arrB.length) {
    return "Panjang kedua array harus sama!";
  }
  for (i = 0; i < arrA.length; i++) {
    const sum = arrA[i] + arrB[i];
    hasiltambah.push(sum);
  }
  return hasiltambah;
}

// Contoh penerapan
let arrA = [11, 22, 33];
let arrB = [3, 2, 1];
console.log(sumArrays(arrA, arrB));

// A.5. Fungsi yang menambahkan elemen ke akhir array jika belum ada dalam array
function addUniqueElement(array, elemen) {
  if (array.includes(elemen)) {
    console.log("Elemen sudah ada");
  } else {
    array.push(elemen);
    console.log("Berhasil ditambahkan");
  }
}

// Contoh penerapan
let uniqueArray = [1, 2, 3];

addUniqueElement(uniqueArray, 6);
console.log(uniqueArray);

//--------------------------------------------------><----------------------------------------//

// B.1. Fungsi untuk menghapus semua angka ganjil dalam array dan mengembalikan array
// baru yang hanya berisi angka genap

function removeOdds(arr) {
  // Menggunakan metode filter untuk membuat array baru yang hanya berisi angka genap
  return arr.filter((num) => num % 2 === 0);
  // Filter akan mengecek setiap elemen dalam array dan hanya menyimpan elemen yang jika dibagi 2
  // sisa bagiannya 0 (angka genap)
}
// Contoh penerapanl
let mixedArray = [1, 2, 3, 4, 5, 6, 7, 8];
// Membuat array contoh yang berisi angka campuran (ganjil dan genap)
console.log(removeOdds(mixedArray));
// Menampilkan hasil dari fungsi removeOdds yang diterapkan pada mixedArray
// Hasilnya akan [2, 4, 6, 8] karena hanya angka-angka tersebut yang genap

// B.2. Fungsi untuk memasukkan beberapa integer yang diberikan ke dalam array dengan ukuran maksimum
function insertIntoArray(maxSize, ...ints) {
  // Mengambil elemen dari ints hingga jumlah maksimal maxSize
  return ints.slice(0, maxSize);
  // Metode slice mengambil elemen dari indeks 0 hingga maxSize (tidak termasuk maxSize)
}
// Contoh penerapan
console.log(insertIntoArray(5, 5, 10, 24, 3, 6, 7, 8));
// Memanggil fungsi insertIntoArray dengan maxSize 5 dan beberapa angka
// Menampilkan [5, 10, 24, 3, 6] karena hanya 5 elemen pertama yang diambil

// B.3. Fungsi yang akan menggabungkan 2 array menjadi satu array
function mergeArrays(arr1, arr2) {
  // Menggabungkan arr1 dan arr2 menjadi satu array
  return arr1.concat(arr2);
  // Metode concat menambahkan elemen-elemen dari arr2 ke arr1
}
// Contoh penerapan
let arr1B = [1, 2, 3];
// Array pertama berisi angka [1, 2, 3]
let arr2B = [4, 5, 6];
// Array kedua berisi angka [4, 5, 6]
console.log(mergeArrays(arr1B, arr2B));
// Memanggil fungsi mergeArrays dengan arr1B dan arr2B
// Menampilkan [1, 2, 3, 4, 5, 6] sebagai hasil penggabungan kedua array

// B.4. Fungsi untuk menemukan nilai duplikat dalam array
function duplicate(resource1) {
  const seen = new Set(); // Set untuk melacak elemen yang telah terlihat dalam array
  const duplicates = new Set(); // Set untuk melacak elemen yang muncul lebih dari satu kali (duplikat)

  for (const item of resource1) {
    // Loop melalui setiap elemen dalam resource1
    if (seen.has(item)) {
      // Jika item sudah ada di set 'seen', maka item adalah duplikat
      duplicates.add(item); // Tambahkan item ke set 'duplicates'
    } else {
      seen.add(item); // Jika item belum ada di set 'seen', tambahkan item ke set 'seen'
    }
  }
  return [...duplicates];
}

// Contoh penerapan
const result1 = [1, 2, 3, 4, 5, 2, 6, 3, 7, 8, 4];
const result = duplicate(result1);
console.log("Nilai Duplicate:", result);

// B.5. Fungsi untuk menemukan perbedaan dalam 2 array yang diberikan
function cariPerbedaan(arr1, arr2) {
  const set1 = new Set(arr1); // Membuat set dari array pertama untuk menghilangkan duplikat dan mempercepat pencarian
  const set2 = new Set(arr2); // Membuat set dari array kedua untuk menghilangkan duplikat dan mempercepat pencarian

  const perbedaan1 = [...set1].filter((x) => !set2.has(x)); // Mencari elemen yang ada di set1 tetapi tidak ada di set2

  const perbedaan2 = [...set2].filter((x) => !set1.has(x)); // Mencari elemen yang ada di set2 tetapi tidak ada di set1

  return [...perbedaan1, ...perbedaan2]; // Menggabungkan hasil dari kedua perbedaan dan mengembalikannya sebagai array
}

// Contoh penerapan
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const output = cariPerbedaan(array1, array2);
console.log("Perbedaan:", output);

// -----------------------------------------------><--------------------------------------------------//

// C.1. Fungsi yang hanya mengembalikan tipe data primitif dari array
function getPrimitiveTypes(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item !== Object(item) || item === null) {
      result.push(item);
    }
  }
  return result;
}

// Contoh penerapan
let mixedTypeArray = [1, "string", null, false, undefined, 2, "yes", undefined];
console.log(getPrimitiveTypes(mixedTypeArray));

// C.2. Fungsi untuk mengembalikan angka terkecil kedua dari array angka yang diberikan
function secondSmallest(arr) {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== firstSmallest) {
      secondSmallest = arr[i];
    }
  }

  return secondSmallest;
}

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Angka terkecil kedua adalah: " + secondSmallest(arr1));

// C.3. Fungsi untuk mengembalikan jumlah semua angka dari array tipe data campuran
function sumNumbers(arr) {
  const angka = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value === "number") {
      angka.push(value);
    }
  }
  return angka;
}

// Contoh penerapan
const arr3 = ["Dada", 2, 9, "Lala"];
console.log(sumNumbers(arr3));

// C.4. Fungsi untuk mengembalikan jumlah nilai duplikat dari array angka
function duplikatValue(arr) {
  const hitung = {};
  const duplikat = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (hitung[value]) {
      hitung[value]++;
    } else {
      hitung[value] = 1;
    }
  }

  for (const key in hitung) {
    if (hitung[key] > 1) {
      duplikat.push(key);
    }
  }

  return duplikat;
}

const arr5 = [1, 2, 1, 3, 5, 6, 5, 7];
console.log("Duplikat value: " + duplikatValue(arr5));

// C.5. Fungsi permainan batu, gunting, kertas yang akan mengembalikan 'Menang' atau 'Kalah'
function mainBGK(pilihanPlayer) {
  const pilihan = ["Batu", "Gunting", "Kertas"];
  const pilihanKomputer = pilihan[Math.floor(Math.random() * 3)];

  if (pilihanPlayer === pilihanKomputer) {
    return `Seri! anda dan komputer sama-sama memilih ${pilihanPlayer}`;
  } else if (
    (pilihanPlayer === "Batu" && pilihanKomputer === "Gunting") ||
    (pilihanPlayer === "Gunting" && pilihanKomputer === "Kertas") ||
    (pilihanPlayer === "Kertas" && pilihanKomputer === "Batu")
  ) {
    return `Menang! anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer}`;
  } else {
    return `Kalah! anda memilih ${pilihanPlayer} dan komputer memilih ${pilihanKomputer}`;
  }
}

//Contoh penerapan
console.log(mainBGK("Gunting"));
