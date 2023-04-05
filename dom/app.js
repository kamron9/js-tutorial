//document.documentElement = html
//document.head = html head tag
//document.body = html body tag

const header = document.querySelector('.header')

//CREATEING AND INSERTING ELEMENT

const message = document.createElement('div')
message.innerHTML = 'hello from js'
//document.createElement('div') teg yaratish uchun ishlatiladi
//header.prepend(elementnomi) div tegiga birinchi farzand qilib qo'shadi
//header.append(elementnomi) div tegiga oxiridan farzand qilib qo'shadi
//header.before(elementnomi) div tegidan oldin qo'shib beradi
//header.after(elementnomi) div tegidan keyn qo'shib beradi
//message.cloneNode(true) elementni nusxasini yaratib beradi

// DELETE ELEMENT
//header.romove() elementni o'chirib tashlash uchun ishlatiladi
//header.removeChild(elementnomi) elementni ichidagi farzandini o'chirish uchun ishlatiladi
//selecting parent of element
// header.parentElement = elementni otasini tanlab beradi

header.after(message)
//STYLES
//1-yo'li = camelCase bilan stil berish
message.style.background = 'red'
//getComputedStyle(message) barcha stillarni chiqarib beradi
// console.log(getComputedStyle(message))

//2-yo'li = bu yo'l bilan stil berish * (root) elementga tasir qiladi
//document.documentElement.style.setProperty('font-size', '50px')

//ATTRIBUTES
const title = document.querySelector('#title')
//elementdagi attributni olish 1-yo'li
//title.attributnomi  elementni attributini olish uchun
//title.className element class attrubitini olish uchun ishlatiladi

//2-yo'li
//title.getAttribute('attribut nomi')

//yangi attribut qo'shish
//title.setAttribute('attribute nomi', 'qiymati')

//DATA ATTRIBUTES
//data attributlarini olish
// console.log(title.dataset.custom)
// console.log(title.dataset.vNumber) // v-number  (htmlda orasi - bilan ajralgan bo'lsa jsda camelCase usulida yoziladi)

//CLASSES
//title.classList.add('class nomi') yangi class qo'shish uchun ishlatiladi
//title.classList.remove('class nomi') classni o'chirib tashlash uchun ishlatiladsi
//title.classList.toggle('class nomi) agar biz kiritganday class bo'lsa o'chirib yuboradi, agar unday class bo'lmasa qo'shib beradi
//title.classList.contains('class nomi') biz yozganday class bormi yo'qmi tekshiribi beradi true/false

//title.className = 'class nomi' class bilan bu usulni ishlatmaslik kerak bu usulda avvalgi classlarni o'chirib o'rniga yangi class yozib beradi
