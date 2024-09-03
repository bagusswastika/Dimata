// 1. Celcius ke farenhit
/*
1. deklarasika c sebagai celcius
2. deklarasikan f sebagai farenhite dengan c / 2 + 32;
3. print f
 */

let c = 15;
let f = c / 2 + 32;
console.log(`${c}°C adalah ${f}°F`);

// 2. Cek genap atau ganjil
/*
1. deklarasika angka1
2. lakukan if, jika nilai angka1 habis dibagi dengan 2 maka print 'angka ini genap'. else sebaliknya
 */

let angka1 = 4;

if (angka1 % 2 == 0) {
  console.log("Angka ini genap");
} else {
  console.log("Angka ini Ganjil");
}

// 3. Cek bilangan prima atau bukan
/*
1. deklarasika angka2
2. deklarasikan prima dengan boolean true
3. lakukan while loop jika i < angka2, jika angka2 habis dibagi dengan i, berarti bukan bilangan prima.
4. decrement i
5. print console.log(angka ${angka2} ${prima ? "PRIMA" : "BUKAN PRIMA"});
 */

let angka2 = 6;
let prima = true;
let i = 2;
while (i < angka2) {
  if (angka2 % i === 0) {
    prima = false;
    break;
  }
  i++;
}
console.log(`angka ${angka2} ${prima ? "PRIMA" : "BUKAN PRIMA"}`);

// 4. Mencari jumlah bilangan 1 sampai N
/*
1. deklarasikan nilai
2. deklarasikan jumlah
3. lakukan for loop, deklarasikan i=1 agar perhitungan dimulai dari 1. jika i lebih besar atau sama dari nilai, maka i akan ditambahkan
4. lakukan operasi jumlah = jumlah + i untuk mendapatkan jumlah dari angka ke N
*/

let nilai = 7;
let jumlah = 0;

for (let i = 1; i <= nilai; i++) {
  jumlah += i;
}
console.log(`Jumlah bilangan dari 1 sampai ${nilai} adalah ${jumlah}.`);

// 5. Faktorial
/* 
1. deklarasikan nilai2
2. deklarasikan faktorial dengan 1 agar tidak mengubah hasil dari perkalian
3. kondisikan if jika nilai2 kurang dari 0 maka tidak akan bisa melakukan faktorial,
    else:  lakukan for loop dengan kondisi: deklarasikan i dengan 1, jika i lebih kecil atau samadengan nilai2, i akan ditambah
4. lakukan operasi perkalian faktorial = faktorial * i
5. print console.log(Faktorial dari ${nilai2} adalah ${faktorial}.);
*/
let nilai2 = 5;
let faktorial = 1;

if (nilai2 < 0) {
  console.log("Faktorial tidak didefinisikan untuk bilangan negatif.");
} else {
  for (let i = 1; i <= nilai2; i++) {
    faktorial *= i;
  }
  console.log(`Faktorial dari ${nilai2} adalah ${faktorial}.`);
}

// 6. Fibonacci
/*
  1. deklarasikan N
  2. deklarasikan a=0, b=1 seagai bilangan fibonancci pertama dan kedua
  3. print console.log(Deret Fibonacci ${N} angka pertama:); sebagai indikasi ini adalah deret fibonancci
  4. lakukan for loop dengan kondisi: deklarasikan i dengan 1, jika i<N, nilai i akan ditambahkan,
     jika i sama dengan 0, print a, jika i samadengan 1, print b,
     else : deklarasikan c dengan a + b
*/
let N = 14;
let a = 0;
let b = 1;

console.log(`Deret Fibonacci ${N} angka pertama:`);
for (let i = 0; i < N; i++) {
  if (i === 0) {
    console.log(a);
  } else if (i === 1) {
    console.log(b);
  } else {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
