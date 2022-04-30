//═══════[© 2022 Xeon Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to LORD BUDDHA, ME AND MY 
//FAMILY.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['593969186879','593969186879'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['593969186879'] //another owner number
global.premium = ['593969186879'] //premium number
global.pengguna = 'Fuse' //username
global.botnma = 'Cheems Bot-MD' //bot name
global.ownernma = 'Fuse' //owner name
global.packname = 'Fuse' //sticker package name
global.author = 'Fuse' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: '*Hecho* ✓',
    admin: '*SOLO PUEDE SER USADO POR ADMINS*',
    botAdmin: '*TENGO QUE SER ADMIN PRRO >:V*',
    owner: '*SOLO PUEDE SER USADO POR FUSE*',
    group: '*SOLO PUEDE SER USADO EN GRUPOS*',
    private: '*SOLO PUEDE SER USADO EN CHAT PRIVADO*',
    bot: 'This feature in only for the bot number',
    wait: '*EN PROCESO*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./XeonMedia/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
