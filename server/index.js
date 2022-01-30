const express = require("express");
const cors = require("cors");
const app = express();
let { compliment,getFortune,createCharacter,randomChar,getJoke } = require('./controller.js')

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.


// To get a compliment 
app.get("/api/compliment", compliment)

// To get a fortune
app.get('/api/fortune', getFortune)

// Create new character
app.post('/api/newcharacter',createCharacter)


// Get a random character
app.get('/api/random',randomChar)

// click for joke
app.get('/api/jokes',getJoke)
// server
app.listen(4000, () => console.log("Server running on 4000"))
