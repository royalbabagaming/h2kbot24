const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjkyMjYxMTA0NTE2MDcxNDc1.Xn3vmA.w8-x2Gs4aO3O4-VKC6NxzNJdENg';

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }  
})    

bot.on('message', msg=>{
    if(msg.content === "HI"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "hi"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "hello"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "Hi"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "Hello"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "Hey"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "HEY"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "hey"){
        msg.reply('HELLO FRIEND!');
    }   
})

bot.on('message', msg=>{
    if(msg.content === "kaise ho"){
        msg.reply('Badiya Hu! Tum Btao');
    }    
})
 
bot.login(token);