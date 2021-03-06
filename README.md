# IAD Telegram Plant Bot
A telegram bot to remind students in the Interaction Design atelier to water the plants.
The bot is powered by [Node.js Telegram Bot API](https://github.com/yagop/node-telegram-bot-api).

## Installation
1. Clone repo.
```clone
$ git clone https://github.com/znezniV/iad-telegram-plantbot.git
```

2. Install npm packages
```npm
$ cd iad-telegram-plantbot
$ npm install
```

3. Install Nodemon globally
```nodemon
$ npm install nodemon -g
```

4. Add token into code

You can get the token from the Telegram BotFather which needs to be included in the `token` variable in `index.js`.

## Usage
### API (Node)
1. Run script
```npm command
$ npm start
// (starts "nodemon index.js --ignore '*.json'")
```
### Telegram
1. Add bot

2. Commands
- `/start` To start the bot.
- `/stop` To stop watching the plants.
- `/status` To get the status of all plants.
- `<PlantName>` To set Plant as watered.

3. Configure
To configures for the plants have to be be done manually in `plants_config.json` for now.
- `name` For plant name.
- `daysWaterFreq` Number of frequency the plant has to be watered in days.
- `fine` _(optional)_ If plant is fine.
- `lastWatered` The moment of last watering in milliseconds.