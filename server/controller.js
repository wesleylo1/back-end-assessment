const names = require('./db.json')
const idCounter = 4

let fortunes = [
    "The person who will not stand for something will fall for anything.",
    "The best prediction of future is the past.",
    "The strong person understands how to withstand substantial loss.",
    "The harder you work, the luckier you get.",
    "Listen not to vain words of empty tongue."
  ]

let jokes = [
    "I can’t believe I got fired from the calendar factory. All I did was take a day off.",
    "I was addicted to the hokey pokey, but then I turned myself around.",
    "I failed math so many times at school, I can’t even count.",
    "I was wondering why the frisbee kept getting bigger and bigger, but then it hit me."
]

module.exports = {
    compliment: (req,res) => {
        const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
                    ];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },
    getFortune: (req,res) => {
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)
    },
    createCharacter: (req,res) => {
        let { id,name,age } = req.body
        let newChar = {
            id: idCounter,
            name: name,
            age: age
        }
        names.push(newChar)
        res.status(200).send(names)
    },
    randomChar: (req,res) => {
        let randomIndex = Math.floor(Math.random() * names.length)
        let randomName = names[randomIndex].name
        res.status(200).send(randomName)
    },
    getJoke: (req,res) => {
        let randomIndex = Math.floor(Math.random() * jokes.length);
        let randomJoke = jokes[randomIndex]
        res.status(200).send(randomJoke)
    }
}