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
    if (!button_cancel.classList.contains('hidden')) {
        cleartextarea();
    }
    button_save.classList.remove('hidden')
    button_cancel.classList.remove('hidden')
    textarea.classList.remove('hidden')

}
button_cancel.addEventListener('click', Ehidden)
button_new_note.addEventListener('click', newnote)


let notesArray = [{title:"note one", body:"this is my first note"},
                {title:"note two", body:"this is my second note"} ]

function cleartextarea(){
    textarea.value = null
}

let input;
let i = 2; 

function savenote(){
    input = prompt("Enter Title of Note:");
    notesArray.push({title: input, body: textarea.value})
    cleartextarea()
    if (i < notesArray.length){
    listElement = document.createElement('li')
    notesList.appendChild(listElement)
    listElement.textContent = notesArray[i]['title']
    i++;
}
}

button_save.addEventListener('click', savenote)

function getnotes(){
    for (note of notesArray) {
    if (note.title == event.target.innerText) {
        document.querySelector("textarea").value = note.body;
    }
    }
};

notesList.addEventListener('click', getnotes)


