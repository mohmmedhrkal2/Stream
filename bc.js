const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Darks`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By :Darks  ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`بشوف ون بيس`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NTAzOTI0NDIzOTkzMDY1NDcz.D1-1Jg.GbbMOAWP3I7nL_nai211WttMC2I");