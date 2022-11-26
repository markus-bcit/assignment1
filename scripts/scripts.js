const aside = document.querySelector('aside')
const a = document.querySelector('a')
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const button3 = document.querySelector('.button3')
const button4 = document.querySelector('.button4')
const textarea = document.querySelector('textArea')


function togglemode(){
    document.body.classList.toggle('bodydark')
    aside.classList.toggle('asidedark') 
    button1.classList.toggle('buttonDB')
    button2.classList.toggle('buttonDP')
    button3.classList.toggle('buttonDB')
    button4.classList.toggle('buttonDR')
    textarea.classList.toggle('textareaDM')
}

button2.addEventListener('click', togglemode)

let notes = {title:"note one", body:"this is my first note"}

function addnote(){
    textarea.value
}


