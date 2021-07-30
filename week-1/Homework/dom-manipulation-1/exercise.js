/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const p = document.querySelectorAll('p')
console.log(p)

const firstDiv = document.querySelector('div')
console.log(firstDiv)

const jumbotronText = document.querySelector('#jumbotron-text')
console.log(jumbotronText)

const primaryContent = document.querySelectorAll('.primary-content p')
console.log(primaryContent)


/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
const alertBtn = document.querySelector('#alertBtn')


alertBtn.addEventListener('click', function alerta() {
    alert("Thanks for visiting Bikes for Refugees!")
})



/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const bgrChangeBtn = document.querySelector('#bgrChangeBtn')
const body = document.querySelector('body');
const colors = ['gray', 'blue', 'yellow', 'pink' , 'white']
let contador = 0;
bgrChangeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    contador>4 ? contador=0 : contador;
    body.style.background = colors[contador];
    contador = contador + 1
}
)
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const addTextBtn = document.querySelector('#addTextBtn')
const h2 = document.querySelector('h2')

addTextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const p = document.createElement('p')
    p.innerText = 'LEARN MORE'
    h2.append(p)

})


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const largerLinksBtn = document.querySelector('#largerLinksBtn')
const a = document.querySelectorAll('a')
largerLinksBtn.addEventListener('click', (event) => {
    event.preventDefault();
    a.forEach(a =>{
        let letra = parseInt(a.style.fontSize)
        letra = letra + 1
        a.style.fontSize = letra + 'em'

     
    })
})

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addArticleBtn = document.querySelector('#addArticleBtn')
const input = document.querySelector('input')
addArticleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const p = document.createElement('p')
    p.innerText = input.value
    h2.append(p)
    input.value = ''
    

})
/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

