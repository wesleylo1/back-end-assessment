const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.


let fortunes = [
  "The person who will not stand for something will fall for anything.",
  "The best prediction of future is the past.",
  "The strong person understands how to withstand substantial loss.",
  "The harder you work, the luckier you get.",
  "Listen not to vain words of empty tongue."
]



// To get a compliment 
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


// To get a fortune
app.get('/api/fortune', (req,res) => {

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})


// new fortune
app.post('/api/new', (req,res) => {
  let { fortuneInput } = req.body
  let newFortune = {
      input: fortuneInput,
  }
  fortunes.push(newFortune)
  res.status(200).send(newFortune)
})

// random pokemon item
function item() {
  axios
      .get('https://pokeapi.co/api/v2/item/')
      .then((res) => {
          let bodyElement = document.body;
          let h3 = document.querySelector('h3')
          let random = Math.floor(Math.random() * res.data.results.length)
          let ranItem = res.data.results[random].name
          h3.textContent = ranItem
          bodyElement.appendChild(h3)
      })
      .catch(err => console.log(err))
    }

app.listen(4000, () => console.log("Server running on 4000"))
