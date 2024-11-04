document.title = 'deandra putra'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const body = document.body
// body.append("JAVASCRIPT PEMULA")

// const h1 = document.createElement('h1') // <h1></h1>
// h1.textContent = 'baru pemula ni bos' // <h1>baru pemula ni boss</h1>

// const namaSaya = document.createElement('p')
// namaSaya.innerHTML = '<marquee>deandra putra</marquee>'

// const namaKamu = document.createElement('b')
// namaKamu.innerText = 'dzikri putra'

// body.append(h1)
// body.append(namaSaya)
// body.append(namaKamu)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const body = document.body
const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const textbaru = document.createElement('h3')

const defaultText = 'KLIK TOMBOL 1'
btn1.textContent = defaultText

const textPertama = 'TAMPILKAN NAMA ANDA'
btn2.textContent = textPertama

btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.fontSize = '24px'
btn1.style.background = 'blue'

btn2.style.background = 'yellow'

// EVENT

// CLIK 1

function clickButton() {
    btn1.style.background = 'green'
    const newtext = document.createElement('h3')
    newtext.textContent = "selamat datang di website saya"
    body.append(newtext)
}

function ubahText() {
    btn1.textContent = 'masuk kedalam'
}

function textAwal() {
    btn1.textContent = defaultText
}

// CLICK 2

function masukText() {
    btn2.style.background = 'aqua'
    btn2.textContent = 'NAMA ANDA SUDAH DI TAMPILAKAN'
    textbaru.textContent = "deandra putra wiguna"
    body.append(textbaru)
}

function keluarText() {
    btn2.textContent = textPertama
    textbaru.style.color = 'blue'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////