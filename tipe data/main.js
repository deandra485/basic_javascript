// alert("hai semua");

// prompt("berapa harga makanan tersebut?")

// let harga = prompt('berapa harga makanan itu')
// alert('harga makanan itu adalah ' + harga)

///////////////////////////////////////////////////////////////////////

// let nama = 'deandra putra' // tipe string
// let usia = 19 // tipe intiger
// let tinggiBandan = 165.0 // tipe double float
// let beratBadan = 45.5
// let makan = null

/////////////////////////////////////////////////////////////////////////

// if (makan == null) {
//     makan = 'belum makan'
// } else {
//     makan = 'sudah makan'
// }

///////////////////////////////////////////////////////////////////////////

// let saldoAwal = 100000
// let saldoTambahan = 50000
// const saldoAkhir = saldoAwal + saldoTambahan

////////////////////////////////////////////////////////////////////////////

// switch(makan) {
//     case 1:
//         makan = 'sudah makan 1 kali'
//         break
//     case 2:
//         makan = 'sudah makan 2 kali, aku sangat rakus'
//         break
//     default:
//         makan = 'belum makan sama sekali'
//         break
// }

//////////////////////////////////////////////////////////////////////////////

// alert(
//     `nama saya ${nama} usia saya ${usia} berat badan saya ${beratBadan}kg dan tinggi saya ${tinggiBandan}cm dan sekarang ${makan}`
// )

////////////////////////////////////////////////////////////////////////////

// alert(
//     `saldo awal saya sebesar Rp.${saldoAwal} dan saya akan mendapatkan saldo tambahan sebesar Rp.${saldoTambahan} jadi total keseluruhan saldo saya senilai Rp.${saldoAkhir}`
// )

/////////////////////////////////////////////////////////////////////////////

// let namaMakanan = ['nasi padang', 'nasi uduk', 'nasi liwet']
// namaMakanan.push('nasi bakar', 'nasi goreng')
// namaMakanan.shift()
// namaMakanan.pop()
// alert(namaMakanan)

/////////////////////////////////////////////////////////////////////////////////

// let namaMakanan = []

// namaMakanan[0] = 'nasi padang'
// namaMakanan[1] = 'nasi uduk'

// alert(namaMakanan)

//////////////////////////////////////////////////////////////////////////////

// for loop

// 3 statement

// const namaMakanan = ['lotek', 'karedok', 'rujak', 'sayur']
// for (let i = 0; i < namaMakanan.length; i++) {
//     console.log(namaMakanan[i])
// }

///////////////////////////////////////////////////////////////////////////////

// let i = 0
// while (i < 10) {
//     i++
//     console.log('deandra putra')
// }

///////////////////////////////////////////////////////////////////////////////

// let i = 0
// do {
//     i++
//     console.log('deandra putra')
// } while (i < 10)

/////////////////////////////////////////////////////////////////////////////

// let hari = new Date().getDay()
// alert(`hari ini adalah hari ${hari}`)

//////////////////////////////////////////////////////////////////////////

// // Meminta input saldo awal dari pengguna
// let saldoAwal = parseFloat(prompt("Masukkan saldo awal Anda:"));

// // Meminta input transaksi dari pengguna
// let transaksi = parseFloat(prompt("Masukkan total transaksi (positif untuk pendapatan, negatif untuk pengeluaran):"));

// // Menghitung saldo akhir
// let saldoAkhir = saldoAwal + transaksi;

// // Menampilkan saldo akhir
// alert("Saldo akhir Anda adalah: " + saldoAkhir);

/////////////////////////////////////////////////////////////////////////

    // // Mendapatkan tanggal saat ini
    // let tanggalSekarang = new Date();

    // // Menentukan hari dalam bentuk string
    // let hari = tanggalSekarang.toLocaleDateString('id-ID', { weekday: 'long' });

    // // Menampilkan hari
    // alert("Hari ini adalah: " + hari);

//////////////////////////////////////////////////////////////////////////

// // Meminta input saldo awal dari pengguna
// let saldoAwal = parseFloat(prompt("Masukkan saldo awal Anda:"));

// // Fungsi untuk menghitung saldo akhir setelah pembelian
// function hitungSaldo(saldo) {
//     let lagi = true;

//     while (lagi) {
//         // Meminta input nama makanan
//         let namaMakanan = prompt("Masukkan nama makanan yang dibeli (atau ketik 'selesai' untuk keluar):");
        
//         // Jika pengguna mengetik 'selesai', keluar dari loop
//         if (namaMakanan.toLowerCase() === 'selesai') {
//             lagi = false;
//         } else {
//             // Meminta input harga makanan
//             let hargaMakanan = parseFloat(prompt("Masukkan harga " + namaMakanan + ":"));
            
//             // Memeriksa apakah saldo cukup untuk membeli
//             if (saldo >= hargaMakanan) {
//                 saldo -= hargaMakanan; // Mengurangi saldo
//                 alert("Pembelian " + namaMakanan + " berhasil! Saldo tersisa: " + saldo);
//             } else {
//                 alert("Saldo tidak cukup untuk membeli " + namaMakanan + ". Saldo Anda: " + saldo);
//             }
//         }
//     }
//     return saldo;
// }

// // Menghitung saldo akhir
// let saldoAkhir = hitungSaldo(saldoAwal);

// // Menampilkan saldo akhir
// alert("Saldo akhir Anda adalah: " + saldoAkhir);

/////////////////////////////////////////////////////////////////////////////////

