let isim = prompt('Ismingizni kiriting')
    
let harf =  prompt('Bironta harf kiriting')


isim.toUpperCase()
harf.toUpperCase()


if (isim.includes(harf)) {
  alert(`${isim}  ismi  ichida  ${harf}  harfi  mavjud ` )
} else {
    alert(`${isim}  ismi  ichida  ${harf}  harfi  mavjud emas` )
}