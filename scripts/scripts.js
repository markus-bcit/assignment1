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

function Ehidden(){
    button3.classList.toggle('hidden')
    button4.classList.toggle('hidden')
    textarea.classList.toggle('hidden')
}
function newnote(){
    button3.classList.remove('hidden')
    button4.classList.remove('hidden')
    textarea.classList.remove('hidden')
    textarea.value = null
}
button4.addEventListener('click', Ehidden)
button1.addEventListener('click', newnote)


let notes = [{title:"note one", body:"this is my first note"}]


let input;

function savenote(){
    input = prompt("Enter Title of Note:");
    notes.push({title: input, body: textarea.value})
    textarea.value = null
}

button3.addEventListener('click', savenote)


// for (let x = 0; x < courselist.length; x++) {
//   if (courselist[x]["code"].includes(input)) {
//     console.log(
//       `Yes I am taking the course: ${courselist[x]["code"]} - ${courselist[x]["name"]}`
//     );
//   }
// }
// console.log(courselist);
