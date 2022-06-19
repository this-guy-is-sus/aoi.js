const aoijs = require ('aoi.js');
const bot = new aoijs.Bot({
  process.env.token,
  prefix:["y.","yuki","$getServerVar[prefix]"],
  intents: "all"
});

bot.onMessage()


const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

bot.variables({
  coins: "0",
   AFK: "off",
  time: "",
  prefix: "y.",
  userav: "0",
    no: ":x:",
    yes: ":white_check_mark:",
  Wallet: "6000000",
  snipe_msg: "",
 snipe_author: "",
 snipe_channel: "",
 snipe_date: "",
msgEditorID: "$authorID",
esnipeOldMsg: "",
  pet: "0",
  petname: "",
  petFood: "0",
  hunger: "0",
  cleanliness: "0",
  fun: "0",
  ccmd: "",
cdes: "",
  giveawaychannelid: "0",
giveawayguildid: "0",
giveawayprize: "",
giveawaydescription: "",
giveawaytime: "0",
giveawayparticipants: "",
giveawayisfinished: "false",
giveawayisgiveaway: "false",
  Message_Snipe: "",
  Bank: "69",
    Author_Snipe: "",
  counter: "1",
  chatbot: ""
})

const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('chika and hero working on music bot and they will fail possibility is 8 out of 10'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);