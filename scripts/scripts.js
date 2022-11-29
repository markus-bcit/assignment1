const aside = document.querySelector('aside')
const a = document.querySelector('a')
const button_new_note = document.querySelector('.button_new_note')
const button_dark_theme = document.querySelector('.button_dark_theme')
const button_save = document.querySelector('.button_save')
const button_cancel = document.querySelector('.button_cancel')
const textarea = document.querySelector('textArea')
const notesList = document.querySelector('ul')


function togglemode(){
    document.body.classList.toggle('bodydark')
    aside.classList.toggle('asidedark') 
    button_new_note.classList.toggle('buttonDB')
    button_dark_theme.classList.toggle('buttonDP')
    button_save.classList.toggle('buttonDB')
    button_cancel.classList.toggle('buttonDR')
    textarea.classList.toggle('textareaDM')
}

button_dark_theme.addEventListener('click', togglemode)

function Ehidden(){
    button_save.classList.toggle('hidden')
    button_cancel.classList.toggle('hidden')
    textarea.classList.toggle('hidden')
}
function newnote(){
    button_save.classList.remove('hidden')
    button_cancel.classList.remove('hidden')
    textarea.classList.remove('hidden')
    textarea.value = null
}
button_cancel.addEventListener('click', Ehidden)
button_new_note.addEventListener('click', newnote)


let notesArray = [{title:"note one", body:"this is my first note"}]


let input;

function savenote(){
    input = prompt("Enter Title of Note:");
    notesArray.push({title: input, body: textarea.value})
    textarea.value = null
    for (let i = 1; i < notesArray.length; i++) {
        listElement = document.createElement('li')
        notesList.appendChild(listElement)
        listElement.textContent = notesArray[i]['title']
    }
}

button_save.addEventListener('click', savenote)


// for (let x = 0; x < courselist.length; x++) {
//   if (courselist[x]["code"].includes(input)) {
//     console.log(
//       `Yes I am taking the course: ${courselist[x]["code"]} - ${courselist[x]["name"]}`
//     );
//   }
// }
// console.log(courselist);
