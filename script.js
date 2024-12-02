const total = document.querySelector('.total');
const inputText = document.querySelector('#contentTask');
const btnAdd = document.querySelector('.add');
const display = document.querySelector('.display');

btnAdd.addEventListener('click',()=>{
    if(inputText.value.length>=0 && inputText.value.length<=30){

        const divcreate = document.createElement('div');
        const pargcreate = document.createElement('p');
        const closebtn = document.createElement('button');

        pargcreate.textContent = inputText.value;
        closebtn.textContent = 'close';

        divcreate.classList.add('divcreate');
        closebtn.classList.add('closebtn')
        pargcreate.classList.add('pargcreate')

        divcreate.appendChild(pargcreate)
        divcreate.appendChild(closebtn)
        display.appendChild(divcreate)

        closebtn.addEventListener("click",()=>{
            divcreate.remove()
        })
    }

})