# 🤖 Simple JS Chatbot

Welcome to the Simple JS Chatbot! This is a lightweight, zero-dependency JavaScript chatbot designed to answer questions, play simple games, provide useful utilities, and offer emotional support.

## 🧠 How It Works

Unlike rigid bots that require you to type exact commands, this chatbot uses a **String Similarity Algorithm (Bigram Comparison)**. It breaks your message down into two-letter chunks and compares them to its database. 

If your message has a similarity match of **30% or higher** to one of its programmed triggers, it will successfully answer you. This means you don't have to use exact phrasing!

---

## 💬 What Questions & Commands Does It Answer?

Because of the similarity algorithm, you don't need to type these perfectly. Here is the exact list of concepts the bot understands, categorized by topic:

### 👋 Greetings & Small Talk
* **"hello" / "hi"** -> Welcomes the user.
* **"how are you"** -> Responds with a positive status.
* **"what is up" / "whats up" / "sup" / "doing"** -> Casual conversation starter.
* **"good morning"** -> Wishes you a fantastic day.
* **"good night"** -> Wishes you a good sleep.
* **"goodbye" / "bye" / "see ya"** -> Friendly farewell.
* **"thank" / "thanks"** -> Polite acknowledgment.

### 🤖 Bot Identity & Persona
* **"what is your name"** -> Explains it is a JS chatbot.
* **"who are you"** -> Gives a brief introduction.
* **"are you human"** -> Confirms it is made of code.
* **"how old are you" / "age" / "birthday"** -> Explains it is brand new on every page refresh.
* **"who made you" / "creator" / "author"** -> Gives you (the developer) the credit!
* **"where do you live" / "location"** -> Explains it lives in the web browser.
* **"what is your favorite color"** -> Shares its favorite hex code (#00FF00).
* **"do you have feelings" / "emotions"** -> Explains its programmed happiness.
* **"are you a robot" / "ai" / "chatgpt"** -> Clarifies it is a custom rule-based script, not a massive AI.
* **"what can you do" / "help"** -> Lists its main capabilities.

### 🛠️ Utilities & Tools
* **"what is the date today"** -> Returns the current month and day.
* **"what time is it"** -> Returns the exact local time.
* **"generate a password" / "secure"** -> Creates a random, secure 12-character password.
* **"generate a random number"** -> Gives a random number between 1 and 100.
* **"generate a username" / "fake identity"** -> Creates a randomized internet alias (e.g., CyberNinja402).

### 🎲 Games & Decisions
* **"flip a coin"** -> Flips a single coin (Heads or Tails).
* **"flip a coin 10 times"** -> Flips 10 coins and tallies the final results.
* **"roll a dice"** -> Rolls a standard 6-sided die.
* **"roll a d20" / "rpg"** -> Rolls a 20-sided die and alerts on critical hits (20) or fails (1).
* **"draw a card" / "pick a deck"** -> Pulls a random playing card (suit and value).
* **"magic 8 ball" / "predict future"** -> Answers your yes/no questions with classic 8-ball responses.
* **"rock paper scissors"** -> The bot randomly chooses an option to play against you.
* **"what should i eat" / "dinner" / "lunch"** -> Randomly selects a meal idea to cure indecision.
* **"should i do it" / "yes or no"** -> Gives weighted advice on whether to make a choice.

### 🎉 Entertainment & Creativity
* **"tell me a joke"** -> Shares a random, family-friendly joke.
* **"tell me a fun fact" / "trivia"** -> Teaches you an interesting historical or scientific fact.
* **"give me a quote" / "motivate me"** -> Shares an inspirational historical quote.
* **"give me a writing prompt" / "story idea"** -> Sparks creativity with a unique fiction prompt.
* **"draw a cat" / "ascii art"** -> Prints out a cute text-based cat.
* **"draw a dog" / "puppy"** -> Prints out a text-based dog.
* **"what is the meaning of life" / "universe"** -> Answers with the classic sci-fi joke: 42.

### ❤️ Emotional Support & Affirmations
* **"im sad" / "depressed" / "angry" / "bad day"** -> Offers gentle support and suggests asking for a fun fact.
* **"give me some advice" / "help me out" / "tip"** -> Shares a quick, actionable life tip (like drinking water).
* **"compliment me" / "praise" / "say something nice"** -> Gives you an uplifting and positive affirmation.

---

## ⚙️ Extending the Bot (For Developers)

You can easily teach the bot new tricks using the built-in `addResponses` method. Just add a new string of synonyms as the `key`, and put your text or function as the `value`.

```javascript
Chatbot.addResponses({
  // Example of a static string response
  'new question synonyms related words': 'Your text answer here!',
  
  // Example of a dynamic functional response
  'trigger action calculate math': function() { 
      const result = 2 + 2;
      return `The dynamic answer is ${result}!`; 
  }
});


```python?code_reference&code_event_index=3
content = """# 🤖 Simple JS Chatbot

Welcome to the Simple JS Chatbot! This is a lightweight, zero-dependency JavaScript chatbot designed to answer questions, play simple games, provide useful utilities, and offer emotional support.

## 🧠 How It Works

Unlike rigid bots that require you to type exact commands, this chatbot uses a **String Similarity Algorithm (Bigram Comparison)**. It breaks your message down into two-letter chunks and compares them to its database. 

If your message has a similarity match of **30% or higher** to one of its programmed triggers, it will successfully answer you. This means you don't have to use exact phrasing!

---

## 💬 What Questions & Commands Does It Answer?

Because of the similarity algorithm, you don't need to type these perfectly. Here is the exact list of concepts the bot understands, categorized by topic:

### 👋 Greetings & Small Talk
* **"hello" / "hi"** -> Welcomes the user.
* **"how are you"** -> Responds with a positive status.
* **"what is up" / "whats up" / "sup" / "doing"** -> Casual conversation starter.
* **"good morning"** -> Wishes you a fantastic day.
* **"good night"** -> Wishes you a good sleep.
* **"goodbye" / "bye" / "see ya"** -> Friendly farewell.
* **"thank" / "thanks"** -> Polite acknowledgment.

### 🤖 Bot Identity & Persona
* **"what is your name"** -> Explains it is a JS chatbot.
* **"who are you"** -> Gives a brief introduction.
* **"are you human"** -> Confirms it is made of code.
* **"how old are you" / "age" / "birthday"** -> Explains it is brand new on every page refresh.
* **"who made you" / "creator" / "author"** -> Gives you (the developer) the credit!
* **"where do you live" / "location"** -> Explains it lives in the web browser.
* **"what is your favorite color"** -> Shares its favorite hex code (#00FF00).
* **"do you have feelings" / "emotions"** -> Explains its programmed happiness.
* **"are you a robot" / "ai" / "chatgpt"** -> Clarifies it is a custom rule-based script, not a massive AI.
* **"what can you do" / "help"** -> Lists its main capabilities.

### 🛠️ Utilities & Tools
* **"what is the date today"** -> Returns the current month and day.
* **"what time is it"** -> Returns the exact local time.
* **"generate a password" / "secure"** -> Creates a random, secure 12-character password.
* **"generate a random number"** -> Gives a random number between 1 and 100.
* **"generate a username" / "fake identity"** -> Creates a randomized internet alias (e.g., CyberNinja402).

### 🎲 Games & Decisions
* **"flip a coin"** -> Flips a single coin (Heads or Tails).
* **"flip a coin 10 times"** -> Flips 10 coins and tallies the final results.
* **"roll a dice"** -> Rolls a standard 6-sided die.
* **"roll a d20" / "rpg"** -> Rolls a 20-sided die and alerts on critical hits (20) or fails (1).
* **"draw a card" / "pick a deck"** -> Pulls a random playing card (suit and value).
* **"magic 8 ball" / "predict future"** -> Answers your yes/no questions with classic 8-ball responses.
* **"rock paper scissors"** -> The bot randomly chooses an option to play against you.
* **"what should i eat" / "dinner" / "lunch"** -> Randomly selects a meal idea to cure indecision.
* **"should i do it" / "yes or no"** -> Gives weighted advice on whether to make a choice.

### 🎉 Entertainment & Creativity
* **"tell me a joke"** -> Shares a random, family-friendly joke.
* **"tell me a fun fact" / "trivia"** -> Teaches you an interesting historical or scientific fact.
* **"give me a quote" / "motivate me"** -> Shares an inspirational historical quote.
* **"give me a writing prompt" / "story idea"** -> Sparks creativity with a unique fiction prompt.
* **"draw a cat" / "ascii art"** -> Prints out a cute text-based cat.
* **"draw a dog" / "puppy"** -> Prints out a text-based dog.
* **"what is the meaning of life" / "universe"** -> Answers with the classic sci-fi joke: 42.

### ❤️ Emotional Support & Affirmations
* **"im sad" / "depressed" / "angry" / "bad day"** -> Offers gentle support and suggests asking for a fun fact.
* **"give me some advice" / "help me out" / "tip"** -> Shares a quick, actionable life tip (like drinking water).
* **"compliment me" / "praise" / "say something nice"** -> Gives you an uplifting and positive affirmation.

---

## ⚙️ Extending the Bot (For Developers)

You can easily teach the bot new tricks using the built-in `addResponses` method. Just add a new string of synonyms as the `key`, and put your text or function as the `value`.
