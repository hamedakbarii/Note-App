'use strict'

const input = document.querySelector('#input-field')
const colorsBox = document.querySelectorAll('.color-box')
const deleteBtn = document.querySelector('#btn-delete')
const addBtn = document.querySelector('#btn-save')
const mainList = document.querySelector('#listed')

function addNewNote() {
    const div = document.createElement('div')
    div.className = "card shadow-sm rounded"
    mainList.appendChild(div)

    const p = document.createElement('p')
    p.className = "card-text p-3"
    p.innerHTML = input.value
    div.appendChild(p)

    div.style.backgroundColor = input.style.backgroundColor
    div.addEventListener('click', () => {
        div.remove()
    })

    input.value = ""
}

input.addEventListener('keydown', (event) => {

    if (input.value) {
        
        if (event.key == "Enter") {
        addNewNote()
        }
        
    }
})

colorsBox.forEach((color) => {
    color.addEventListener('click', (event) => {        
        input.style.backgroundColor = event.target.style.backgroundColor
    })
})

deleteBtn.addEventListener('click', () => {
    input.value = ""
    input.style.backgroundColor = "#fff"
})

addBtn.addEventListener('click', () => { 
    if (input.value) {
        addNewNote()
    }
})