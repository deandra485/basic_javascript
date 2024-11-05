// BERSENANDUNG DENGAN ARRAY

// LEVEL 1 ARRAY GAK CUMA GITU BOB MARLEY

// array pertama
// const arraySaya = ['😊', '😂', '🤣']
// console.log(arraySaya)

// // array kadua
// const arrayKamu = []
// arrayKamu[0] = '❤️'
// arrayKamu[1] = '😘'
// arrayKamu[2] = '💕'
// console.log(arrayKamu)

// // array ketiga
// const arrayKita = new Array()
// arrayKita[0] = '😒'
// arrayKita[5] = '😁'
// arrayKita[9] = '😍'
// console.log(arrayKita)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEVEL 2

// // 🥝🥥🍇🍈🍉🍊

// const arraySaya = ['🍊', '🍉', '🍈', '🍇', '🥥']

// const jeruk = arraySaya.includes('🍊')
//     const posisiJeruk = arraySaya.indexOf('🍊')

// if (jeruk) {
//     console.log
//     (`buah jeruk itu ada dan dia di posisi indek ke - ${posisiJeruk}`
//     )
// } else {
//     console.log(`buah menghilang dari bumi`)
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEVEL 3 LOGIKA BUAH JOHN  LENNON

// // 🥝🥥🍇🍈🍉🍊

// const arraySaya = ['🍊', '🍉', '🍈', '🍇', '🥥']

// const anggur = arraySaya.includes('🍇')


// if (anggur) {
//     const posisiAnggur = arraySaya.indexOf('🍇')
//     const indexBefore = posisiAnggur - 1
//     const indexAfter  = posisiAnggur + 1
//     const before = arraySaya[indexBefore]
//     const after = arraySaya[indexAfter]
//     console.log(`buah sebelum anggur adalah ${before}`)
//     console.log(`buah sesudah anggur adalah ${after}`)
//     console.log
//     (`buah anggur itu ada dan dia di posisi indek ke - ${posisiAnggur}`
//     )
// } else {
//     console.log(`buah menghilang dari bumi`)
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEVEL 4 BUAH YANG BIKIN NANGIS ERIC CLAPTOP

// // 🥝🥥🍇🍈🍉🍊

// const arraySaya = ['🍊', '🍉', '🍈', '🍇', '🥥']

// const anggur = arraySaya.includes('🍇')


// if (anggur) {
//     const posisiAnggur = arraySaya.indexOf('🍇')
//     const indexBefore = posisiAnggur - 1
//     const indexAfter  = posisiAnggur + 1
//     const before = arraySaya[indexBefore]
//     const after = arraySaya[indexAfter]
//     console.log(`buah sebelum anggur adalah ${before}`)
//     console.log(`buah sesudah anggur adalah ${after}`)
//     const buahAwal = arraySaya.shift()
//     console.log(`buah awal adalah ${buahAwal}`)
//     const buahAkhir = arraySaya.pop()
//     console.log(`buah akhir adalah ${buahAkhir}`)
// } else {
//     console.log(`buah menghilang dari bumi`)
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEVEL 5 BUAH-BUAHAN ALICIA KEY

// 🥝🥥🍇🍈🍉🍊

// const arraySaya = ['🍊', '🍉', '🍈', '🍇', '🥥']

// const anggur = arraySaya.includes('🍇')


// if (anggur) {
//     const posisiAnggur = arraySaya.indexOf('🍇')
//     const indexBefore = posisiAnggur - 1
//     const indexAfter  = posisiAnggur + 1
//     const before = arraySaya[indexBefore]
//     const after = arraySaya[indexAfter]
//     console.log(`buah sebelum anggur adalah ${before}`)
//     console.log(`buah sesudah anggur adalah ${after}`)
//     const buahAwal = arraySaya.shift()
//     console.log(`buah awal adalah ${buahAwal}`)
//     const buahAkhir = arraySaya.pop()
//     console.log(`buah akhir adalah ${buahAkhir}`)
// } else {
//     console.log(`buah menghilang dari bumi`)
// }

////////////////////////////////////////////////////

// const arraySaya = []

// arraySaya['jeruk'] = '🍊'
// arraySaya['anggur'] = '🍇'

// console.log(arraySaya['anggur'])

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEVEL 6 KOPI & BUAH JOHN MAYER

// const arraySaya = ['🍊', '🍉', '🍈', '🍇', '🥥'] //original
// const newArraySaya = [...arraySaya]// kw

// // COPY SEBUAH ARRAY TETAPI TIDAK MERUBAH ARRAY UTAMA

// // const newArraySaya = [...arraySaya] // spreet operator
// // const newArraySaya = arraySaya.slice()
// // const newArraySaya = Array.from(arraySaya)
// // const newArraySaya = JSON.parse(JSON.stringify(arraySaya))

// newArraySaya[0] = '🍒'

// console.log({ arraySaya })
// console.log({ newArraySaya })

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEVEL 7 BUAH & SAYUR KURT COBAIN

// const arraySaya = [
//     '🍊',
//      15,
//       { 
//         cabai: function () {
//             console.log('ini adalah cabai')
//         } 
//     },
//        ['makan', 'minum']
//     ] //original

// arraySaya[2].cabai()

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LEVEL 8 2 BUAH DEPAPEPE

// const arraySaya = ['🚗', '🚓', '🚕']
// const arrayKamu = ['🛺', '🛻', '🚙']

// const mergeArray = arraySaya.concat(arrayKamu)

// // for (list of mergeArray)
// //     console.log(list)  // urutan isi array

// // for (list in mergeArray)
// //     console.log(list)  // urutan indexnya

// mergeArray.map((value, index) => console.log(value, index)) // untuk menampilkan keduanya

/////////////////////////////////////////////////////

const datas = [
    {
        name: 'deandra putra',
        stack: 'back and dev',
        age: 20,
    },
    {
        name: 'habil',
        stack: 'front and dev',
        age: 21,
    },
    {
        name: 'ramdahan',
        stack: 'mobile and dev',
        age: 22,
    },
    {
        name: 'farhan',
        stack: 'digital marketing',
        age: 23,
    },
]

// datas.map((values, index ) => {
//     console.log(values)
// })

////////////////////////////////////////////////////

// datas.sort((a, b) => b.age - a.age)
// .map((values) => console.log(values))

////////////////////////////////////////////////////

datas.filter((x) => x.age >= 21)
.map((values) => console.log(values))