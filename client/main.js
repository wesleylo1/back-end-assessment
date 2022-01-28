const compBtn = document.getElementById('complimentButton')
const fortuneBtn = document.getElementById('fortuneButton')
const submit = document.getElementById('submit')
let inputField = document.querySelector('input')
const body = document.body;
const h1 = document.querySelector('h1')
const ul = document.querySelector('ul')


function compliment() {
    axios.get("http://localhost:4000/api/compliment/").then(res => {
        const data = res.data;
        alert(data);
    })
}
// random fortune
function fortune() {
    axios.get('http://localhost:4000/api/fortune/').then(res => {
        const data = res.data;
        const h2 = document.createElement('h2')
        h2.textContent = data;
        body.appendChild(h2)
    })
}

//new fortune
function newFortune() {
    axios.post('http://localhost:4000/api/new').then(() => {
        let fortune = document.createElement('li')
        let fortuneName = document.createElement('span')
        fortuneName.textContent = inputField.value
        fortune.appendChild(fortuneName)
        ul.appendChild(fortune)
        inputField.value = ''
    })
    .catch(err => console.log(err))
}




compBtn.addEventListener('click',compliment)
fortuneBtn.addEventListener('click',fortune)
submit.addEventListener('click',newFortune)