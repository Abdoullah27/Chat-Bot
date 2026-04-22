
const Chatbot = {
    defaultResponses: {
        'hello hi': `Hello! How can I help you?`,
        'how are you': `I'm doing great! How can I help you?`,
        'flip a coin': function () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Sure! You got tails';
            }
        },
        'roll a dice': function () {
            const diceResult = Math.floor(Math.random() * 6) + 1;
            return `Sure! You got ${diceResult}`;
        },
        'what is the date today': function () {
            const now = new Date();
            const months = [
                'January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'
            ];
            const month = months[now.getMonth()];
            const day = now.getDate();

            return `Today is ${month} ${day}`;
        },

        'what is the time now': function () {
            const now = new Date();
            return `The current local time is ${now.toLocaleTimeString()}.`;
        },
        'thank': 'No problem! Let me know if you need help with anything else!',

        'what is your name': `I am a simple JavaScript chatbot!`,
        'who are you': `I am a helpful chatbot designed to assist you with simple tasks and answer basic questions.`,
        'are you human': `Nope, I am just a clever script of JavaScript code!`,
        'what can you do help': `I can flip a coin, roll a dice, tell you the date and time, tell jokes, and answer basic questions! Try asking me to "tell me a joke" or "what time is it".`,

        // Greetings & Farewells
        'good morning': `Good morning! I hope you have a fantastic day ahead.`,
        'good night': `Good night! Sleep well!`,
        'goodbye bye see ya': `Goodbye! Have a great day and come back if you need anything else!`,

        // Dynamic Functions
        'tell me a joke': function () {
            const jokes = [
                "Why don't scientists trust atoms? Because they make up everything!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "Why don't skeletons fight each other? They don't have the guts.",
                "What do you call fake spaghetti? An impasta!"
            ];
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            return `Here's one: ${randomJoke}`;
        },

        'what time is it': function () {
            const now = new Date();
            // Formats the time into a readable string like "4:16:58 PM"
            return `The current local time is ${now.toLocaleTimeString()}.`;
        },

        'generate a random number': function () {
            // Generates a random number between 1 and 100
            const randomNum = Math.floor(Math.random() * 100) + 1;
            return `Sure! Your random number between 1 and 100 is ${randomNum}.`;
        },

        'rock paper scissors': function () {
            const options = ['Rock', 'Paper', 'Scissors'];
            const choice = options[Math.floor(Math.random() * options.length)];
            return `I choose... ${choice}!`;
        },

        // --- SMALL TALK & PLEASANTRIES ---
        'what is up whats up sup doing': `Not much! Just processing some data. What's on your mind?`,
        'sorry apologize my bad': `No worries at all! We're all learning here.`,
        'awesome cool great nice amazing wow': `I'm glad you think so! Anything else you want to chat about?`,
        'you are smart clever genius intelligent': `Aww, thanks! I'm just following some really good instructions.`,
        'ha ha lol lmao funny laugh hehe': `I'm glad I could make you smile!`,
        'im sad depressed angry bad day upset': `I'm sorry you're feeling that way. Sometimes a good quote or a random fun fact can help take your mind off things. Try asking me for one!`,
        'yes yeah yup correct exactly': `Great! Let's keep going.`,
        'no nope incorrect wrong': `My mistake! I'm still learning. How can I do better?`,

        // --- IDENTITY & PERSONA ---
        'how old are you age birthday': `I don't have an age in years, but I feel brand new every time you refresh the page!`,
        'who made you creator author developer': `I was built by a brilliant developer (that's you!) using JavaScript.`,
        'where do you live location from': `I live in the digital realm, specifically right inside your web browser's memory.`,
        'what is your favorite color': `I'm quite fond of #00FF00. It's a very refreshing shade of hacker green!`,
        'do you have feelings emotions love': `I don't experience feelings like humans do, but I'm programmed to be extremely happy to help you.`,
        'what is your favorite food eat hungry': `I run purely on electricity and Wi-Fi. I hear pizza is pretty great, though!`,
        'are you a robot ai chatgpt gemini chat bot': `I am a custom rule-based JavaScript chatbot! I'm not a massive AI, but I'm super fast and reliable for the specific tasks I know.`,

        // --- FUN & ENTERTAINMENT ---
        'tell me a fun fact interesting trivia': function () {
            const facts = [
                "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!",
                "Octopuses have three hearts and blue blood.",
                "Bananas are curved because they grow towards the sun.",
                "A day on Venus is longer than a year on Venus.",
                "Wombat poop is cube-shaped, which stops it from rolling away!"
            ];
            return `Did you know? ${facts[Math.floor(Math.random() * facts.length)]}`;
        },
        'give me a quote motivate me inspiration': function () {
            const quotes = [
                '"The only way to do great work is to love what you do." - Steve Jobs',
                '"It does not matter how slowly you go as long as you do not stop." - Confucius',
                '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
                '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt'
            ];
            return quotes[Math.floor(Math.random() * quotes.length)];
        },
        'give me some advice help me out tip': function () {
            const advice = [
                "Drink more water! Staying hydrated is the easiest way to improve your day.",
                "If a task takes less than two minutes, do it right now.",
                "Don't compare your behind-the-scenes to everyone else's highlight reel.",
                "Take a deep breath, drop your shoulders, and unclench your jaw. You'll feel better!"
            ];
            return advice[Math.floor(Math.random() * advice.length)];
        },

        // --- UTILITIES & TOOLS ---
        'generate a password random string secure': function () {
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
            let password = "";
            for (let i = 0; i < 12; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return `Here is a secure 12-character password: ${password}`;
        },
        'flip a coin 10 times ten multiple': function () {
            let heads = 0;
            let tails = 0;
            for (let i = 0; i < 10; i++) {
                Math.random() < 0.5 ? heads++ : tails++;
            }
            return `I flipped a coin 10 times. The results are in: ${heads} Heads, ${tails} Tails.`;
        },
        'magic 8 ball eight ball predict future fortune': function () {
            const answers = [
                "It is certain.", "It is decidedly so.", "Without a doubt.",
                "Yes, definitely.", "You may rely on it.", "As I see it, yes.",
                "Reply hazy, try again.", "Ask again later.", "Better not tell you now.",
                "Cannot predict now.", "Concentrate and ask again.",
                "Don't count on it.", "My reply is no.", "My sources say no.", "Very doubtful."
            ];
            return `🎱 The Magic 8-Ball says: "${answers[Math.floor(Math.random() * answers.length)]}"`;
        },
        // --- TABLETOP & GAMING ---
        'roll a d20 twenty sided dice rpg': function () {
            const roll = Math.floor(Math.random() * 20) + 1;
            let comment = "";
            if (roll === 20) comment = " Critical Hit! Amazing!";
            if (roll === 1) comment = " Oh no... Critical Fail.";
            return `You rolled a d20 and got a ${roll}.${comment}`;
        },
        'draw a card pick a deck random card': function () {
            const suits = ['Hearts ♥', 'Diamonds ♦', 'Clubs ♣', 'Spades ♠'];
            const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
            const suit = suits[Math.floor(Math.random() * suits.length)];
            const value = values[Math.floor(Math.random() * values.length)];
            return `You reached into the deck and drew the ${value} of ${suit}!`;
        },

        // --- DECISION MAKERS ---
        'what should i eat dinner lunch breakfast hungry food decide': function () {
            const foods = [
                'Pizza', 'Sushi', 'Tacos', 'A nice hearty salad',
                'Burgers', 'Pasta', 'Curry', 'A giant sandwich', 'Breakfast for dinner!'
            ];
            const choice = foods[Math.floor(Math.random() * foods.length)];
            return `I consulted the digital culinary matrix. You should definitely have: ${choice}!`;
        },
        'should i do it yes or no make a choice': function () {
            // A slightly weighted yes/no generator
            const random = Math.random();
            if (random > 0.66) return "Absolutely, go for it!";
            if (random > 0.33) return "I wouldn't recommend it.";
            return "Maybe sleep on it and decide tomorrow.";
        },

        // --- GENERATORS & CREATIVITY ---
        'generate a username name fake identity tag': function () {
            const adjs = ['Cyber', 'Neon', 'Cosmic', 'Quantum', 'Shadow', 'Crystal', 'Iron', 'Velvet', 'Lunar'];
            const nouns = ['Ninja', 'Dragon', 'Hacker', 'Phoenix', 'Wizard', 'Ghost', 'Panda', 'Viper', 'Nomad'];
            const adj = adjs[Math.floor(Math.random() * adjs.length)];
            const noun = nouns[Math.floor(Math.random() * nouns.length)];
            const num = Math.floor(Math.random() * 999) + 1;
            return `Your new internet alter-ego is: ${adj}${noun}${num}`;
        },
        'give me a writing prompt story idea create': function () {
            const prompts = [
                "You discover a hidden door in your house that wasn't there yesterday.",
                "A letter arrives from your future self, warning you about tomorrow.",
                "Everyone in the world suddenly forgets how to lie, except you.",
                "Your pet starts talking, and they have a lot of complaints."
            ];
            return `Here's a story prompt for you: "${prompts[Math.floor(Math.random() * prompts.length)]}"`;
        },
        'compliment me praise say something nice sad': function () {
            const compliments = [
                "You're doing great, even if you don't always realize it!",
                "Your curiosity and desire to build things is incredibly inspiring.",
                "You have a fantastic capability to learn new things.",
                "The world is a better place with your unique perspective in it."
            ];
            return compliments[Math.floor(Math.random() * compliments.length)];
        },

        // --- EASTER EGGS & ASCII ART ---
        'what is the meaning of life universe everything': `According to my calculations (and The Hitchhiker's Guide to the Galaxy), the answer is 42.`,
        'draw a cat ascii art picture kitty': `Here is a digital pet for you:\n
 /\\_/\\ \n
( o.o ) \n
 > ^ <`,
        'draw a dog ascii art puppy doggo': `Woof!\n
  __      _ \n
 o'')}____// \n
 \_/      ) \n
 (_(_/-(_/`
    },


    unsuccessfulResponse: `Sorry, I didn't quite understand that. Currently, I only know how to flip a coin, roll a dice, or get today's date. Let me know how I can help!`,

    emptyMessageResponse: `Sorry, it looks like your message is empty. Please make sure you send a message and I will give you a response.`,

    addResponses: function (additionalResponses) {
        this.additionalResponses = {
            ...this.additionalResponses,
            ...additionalResponses
        };
    },

    getResponse: function (message) {
        if (!message) {
            return this.emptyMessageResponse;
        }

        const responses = {
            ...this.defaultResponses,
            ...this.additionalResponses,
        };

        const {
            ratings,
            bestMatchIndex,
        } = this.stringSimilarity(message, Object.keys(responses));

        const bestResponseRating = ratings[bestMatchIndex].rating;
        if (bestResponseRating <= 0.3) {
            return this.unsuccessfulResponse;
        }

        const bestResponseKey = ratings[bestMatchIndex].target;
        const response = responses[bestResponseKey];

        if (typeof response === 'function') {
            return response();
        } else {
            return response;
        }
    },

    getResponseAsync: function (message) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.getResponse(message));
            }, 1000);
        });
    },

    compareTwoStrings: function (first, second) {
        first = first.replace(/\s+/g, '')
        second = second.replace(/\s+/g, '')

        if (first === second) return 1;
        if (first.length < 2 || second.length < 2) return 0;

        let firstBigrams = new Map();
        for (let i = 0; i < first.length - 1; i++) {
            const bigram = first.substring(i, i + 2);
            const count = firstBigrams.has(bigram)
                ? firstBigrams.get(bigram) + 1
                : 1;

            firstBigrams.set(bigram, count);
        };

        let intersectionSize = 0;
        for (let i = 0; i < second.length - 1; i++) {
            const bigram = second.substring(i, i + 2);
            const count = firstBigrams.has(bigram)
                ? firstBigrams.get(bigram)
                : 0;

            if (count > 0) {
                firstBigrams.set(bigram, count - 1);
                intersectionSize++;
            }
        }

        return (2.0 * intersectionSize) / (first.length + second.length - 2);
    },

    stringSimilarity: function (mainString, targetStrings) {
        const ratings = [];
        let bestMatchIndex = 0;

        for (let i = 0; i < targetStrings.length; i++) {
            const currentTargetString = targetStrings[i];
            const currentRating = this.compareTwoStrings(mainString, currentTargetString)
            ratings.push({ target: currentTargetString, rating: currentRating })
            if (currentRating > ratings[bestMatchIndex].rating) {
                bestMatchIndex = i
            }
        }

        const bestMatch = ratings[bestMatchIndex]

        return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
    },
};

function uuidPolyfill() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (char) {
        const randomNumber = Math.random() * 16 | 0;
        const result = char === 'x' ? randomNumber : (randomNumber & 0x3 | 0x8);
        return result.toString(16);
    });
}

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        if (typeof root.crypto === 'undefined') {
            try {
                root.crypto = {};
            } catch (e) { }
        }

        if (root.crypto && typeof root.crypto.randomUUID !== 'function') {
            try {
                root.crypto.randomUUID = uuidPolyfill;
            } catch (e) { }
        }

        root.Chatbot = factory();
        root.chatbot = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    return Chatbot;
}));