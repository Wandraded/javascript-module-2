const blueBtn = document.querySelector('#blueBtn');
const orangeBtn = document.querySelector('#orangeBtn');
const greenBtn = document.querySelector('#greenBtn');
const jumbotron = document.querySelector('.jumbotron');
const btnLrg = document.querySelector('.btn-1rg')
const btnSeconndary = document.querySelector('.btn-secondary')

blueBtn.addEventListener('click', (event) => {
    event.preventDefault();
    jumbotron.style.backgroundColor = '#588FBD';
    btnLrg.style.backgroundColor = '#FFA500';
    btnSecondary.style.backgroundColor = 'black';
    btnSecondary.style.color = 'white';
})
orangeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    jumbotron.style.backgroundColor = '#F0AD4E';
    btnLrg.style.backgroundColor = '#5751FD';
    btnSecondary.style.backgroundColor = '#31B0D5';
    btnSecondary.style.color = 'white';
})
greenBtn.addEventListener('click', (event) => {
    event.preventDefault();
    jumbotron.style.backgroundColor = '#87CA8A';
    btnLrg.style.backgroundColor = 'black';
    btnSecondary.style.backgroundColor = '#8C9C08';
})

//Parte II

const mail = document.querySelector("#exampleInputEmail1")
const name = document.querySelector("#example-text-input")
const area = document.querySelector("#exampleTextarea")
const submit = document.querySelector("form button")

function email(){
    if (mail.value.length > 0 && mail.value.includes("@")) {
        mail.style.border = ''
    } else {
        mail.style.border = '2px solid red'
    }
}
function ename(){
        if (name.value.length > 0) {
            name.style.border = ''
        } else {
            name.style.border = '2px solid red'
        }
}
function earea(){
    if (area.value.length > 0) {
        area.style.border = ''
    } else {
        area.style.border = '2px solid red'
    }
}
submit.addEventListener("click",(event)=>{
    event.preventDefault()
    if (mail.value.length>0 && name.value.length>0 && area.value.length>0 && mail.value.includes("@")){
        mail.value=""
        name.value=""
        area.value=""
        mail.style.border="1px solid rgba(0,0,0,.15)"
        name.style.border="1px solid rgba(0,0,0,.15)"
        area.style.border="1px solid rgba(0,0,0,.15)"
        alert('Thank you for filling out the form');        
    }else {
        mail.addEventListener("focusout", email())
        name.addEventListener("focusout",ename())
        area.addEventListener("focusout", earea())
        alert('You must fill all the form')}
})