const compBtn = document.getElementById('complimentButton')
const fortuneBtn = document.getElementById('fortuneButton')
const body = document.body;
const forText = document.querySelector('.fortune-text')
const form = document.querySelector('form')
const charBtn = document.querySelector('.character-button')
const randomCharacter = document.querySelector('.character-text')
const jokeBtn = document.querySelector('.joke')
const joke = document.querySelector('.joke2')


const baseURL = 'http://localhost:4000/api'


const errCallback = err => console.log(err.res.data)
const compliment = () => axios.get(`${baseURL}/compliment`).then(res => alert(res.data)).catch(errCallback)
const getFortune = () => axios.get(`${baseURL}/fortune`).then(res => {forText.textContent = res.data}).catch(errCallback)
const createCharacter = body => axios.post(`${baseURL}/newCharacter`,body).then(res => {alert(`character submitted`);console.log(res.data)}).catch(errCallback)
const randomChar = () => axios.get(`${baseURL}/random`).then(res => {randomCharacter.textContent = res.data}).catch(errCallback)




function submitHandler(e) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let age = document.querySelector('#age')

    let charObj = {
        name: name.value,
        age: age.value
    }

    createCharacter(charObj)

    name.value = ''
    age.value = ''
}





fortuneBtn.addEventListener('click', getFortune)
compBtn.addEventListener('click',compliment)
form.addEventListener('submit',submitHandler)
charBtn.addEventListener('click',randomChar)
jokeBtn.addEventListener('click',() => {
    axios.get(`${baseURL}/jokes`).then(res => joke.textContent = res.data).catch(errCallback)
})


