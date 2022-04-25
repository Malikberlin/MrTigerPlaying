const Discord = require('discord.js');
const tpoints = {};
const prefix = "2"
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();



client.on("ready", () => {
  console.log(
    `Online In Servers : ${client.guilds.size} | Users : ${client.users.size}`
  );
  let statuses = [
   
    `🖤`,
    `ᴹᴬ𝙿𝚁𝙾𝙵𝙴𝚂𝚂𝙾𝚁`,
    `شای شەترەنج و دەنگێکی ماندوو ..!`,
    `MADO UP `,
    `ᴹᴬ𝙿𝚁𝙾𝙵𝙴𝚂𝚂𝙾𝚁 UP`,
  ];
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {      
    type:"Playing", 
    url: "https://www.twitch.tv/faith"
    });
  }, 2000);
});

client.login("");
