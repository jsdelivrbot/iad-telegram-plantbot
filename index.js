// load node module
const TelegramBot = require('node-telegram-bot-api');

// load token
const loadedToken = require('./token');

// assign token
const token = loadedToken.telegramToken;

// create new bot
const bot = new TelegramBot(token, { polling: true });
