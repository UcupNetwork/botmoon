import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'

const defaultMenu = {
before: `╭––『「 %me 』
┆❏ *Mode:* Public
┆❏ *Platform:* Linux
┆❏ *Type:* Node.Js
┆❏ *Baileys:* MultiAuth
┆❏ *Uptime:* %muptime
┆❏ *Database:* %rtotalreg Dari %totalreg
┆❏ *Days:* %week %weton
┆❏ *Date:* %date
┆❏ *Islamic Date:* %dateIslamic
┆❏ *Time:* %wib
╰–––––––––––––––༓
%readmore
`.trimStart(),
header: '❏–––––『 *%category* 』',
body: `┆≼≽ %cmd %isPremium %islimit`,
footer: `❏–––––––––––––––༓`,
after: ` `,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let tags
let emot = `${pickRandom(['⎔', '◈▻', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚜', '⚝', '⚚', '♪'])}`
let rndom = `${pickRandom(['defaultMenu', 'defmenu1'])}`
let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'ai', 'asupan', 'anime', 'update', 'stress', 'stalker', 'menfess', 'maker', 'berita', 'edukasi', 'news', 'random', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'textpro', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database","quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
if (!arrayMenu.includes(teks)) teks = '404'
if (teks == 'all') tags = {
'main': 'Main',
'ai': 'Ai',
'asupan': 'Asupan',
'stress': 'Stress',
'menfess': 'Menfess',
'game': 'Game',
'rpg': 'RPG Games',
'textpro': 'Maker Text',
'xp': 'Exp & Limit',
'sticker': 'Sticker',
'kerang': 'Kerang Ajaib',
'quotes': 'Quotes',
'fun': 'Fun',
'anime': 'Anime',
'admin': 'Admin',
'group': 'Group',
'vote': 'Voting',
'absen': 'Absen',
'premium': 'Premium',
'anonymous': 'Anonymous Chat',
'internet': 'Internet',
'downloader': 'Downloader',
'tools': 'Tools',
'nulis': 'MagerNulis & Logo',
'audio': 'Audio',
'maker': 'Maker',
'berita': 'Berita',
'database': 'Database',
'quran': 'Al Qur\'an',
'owner': 'Owner',
'stalker': 'Stalker',
'info': 'Info',
'y': 'No Category',
}
if (teks == 'stress') tags = {
'stress': 'Stress'
}
if (teks == 'ai') tags = {
'ai': 'Ai'
}
if (teks == 'asupan') tags = {
'asupan': 'Asupan'
}
if (teks == 'menfess') tags = {
'menfess': 'Menfess'
}
if (teks == 'game') tags = {
'game': 'Game'
}
if (teks == 'anime') tags = {
'anime': 'Anime'
}
if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'rpg') tags = {
'rpg': 'Rpg'
}
if (teks == 'edukasi') tags = {
'edukasi': 'Edukasi'
}
if (teks == 'news') tags = {
'news': 'News'
}
if (teks == 'random') tags = {
'random': 'Random'
}
if (teks == 'xp') tags = {
'xp': 'Exp & Limit'
}
if (teks == 'stiker') tags = {
'sticker': 'Stiker'
}
if (teks == 'textpro') tags = {
      'textpro': 'Textpro'
      }
if (teks == 'kerangajaib') tags = {
'kerang': 'Kerang Ajaib'
}
if (teks == 'quotes') tags = {
'quotes': 'Quotes'
}
if (teks == 'berita') tags = {
'berita': 'Berita'
}
if (teks == 'admin') tags = {
'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
'group': 'Grup'
}
if (teks == 'group') tags = {
'group': 'Group'
}
if (teks == 'premium') tags = {
'premium': 'Premium'
}
if (teks == 'internet') tags = {
'internet': 'Internet'
}
if (teks == 'anonymous') tags = {
'anonymous': 'Anonymous Chat'
}
if (teks == 'nulis') tags = {
'nulis': 'Nulis',
}
if (teks == 'maker') tags = {
'maker': 'Maker'
}
if (teks == 'downloader') tags = {
'downloader': 'Downloader'
}
if (teks == 'tools') tags = {
'tools': 'Tools'
}
if (teks == 'fun') tags = {
'fun': 'Fun'
}
if (teks == 'database') tags = {
'database': 'Database'
}
if (teks == 'vote') tags = {
'vote': 'Voting',
}
if (teks == 'absen') tags = {
'absen': 'Absen'
}
if (teks == 'quran') tags = {
'quran': 'Al-Qur\'an',
'islamic': 'Islamic'
}
if (teks == 'audio') tags = {
'audio': 'Audio'
}
if (teks == 'jadibot') tags = {
'jadibot': 'Jadi Bot'
}
if (teks == 'info') tags = {
'info': 'Info'
}
if (teks == 'owner') tags = {
'owner': 'Owner',
}
 if (teks == 'nsfw') tags = {
'nsfw': 'Nsfw'
}
if (teks == 'stalker') tags = {
'stalker': 'Stalker'
}
if (teks == 'nocategory') tags = {
'y': 'No Category'
}
try {
// DEFAULT MENU
let dash = global.dashmenu
let m1 = global.dmenut
let m2 = global.dmenub
let m3 = global.dmenuf
let m4 = global.dmenub2

// COMMAND MENU
let cc = global.cmenut
let c1 = global.cmenuh
let c2 = global.cmenub
let c3 = global.cmenuf
let c4 = global.cmenua

// LOGO L P
let lprem = global.lopr
let llim = global.lolm
let tag = `@${m.sender.split('@')[0]}`

let _mpt
if (process.send) {
process.send('uptime')
_mpt = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let mpt = clockString(_mpt)
const sections = [{
title: `${htki} Silahkan Pilih Salah Satu ${htka}`,
rows: [
{title: `「ღ」| All Fitur`, rowId: ".? all", description: "Menampilkan Semua Fitur"},
{title: `「ღ」| Ai`, rowId: ".? ai", description: "Sekumpulan Fitur Ai"},
{title: `「ღ」| Admin`, rowId: ".? admin", description: "Khusus Admin Grup"},
{title: `「ღ」| Al-Quran`, rowId: ".? quran", description: "Mari Mendekatkan Diri Kepada Sang Pencipta"},
{title: `「ღ」| Anime`, rowId: ".? anime", description: "Apakah Kamu Anime Kak?"},
{title: `「ღ」| Anonymous`, rowId: ".? anonymous", description: "Mengobrol Dengan Orang Yang Tidak Di Kenal"},
{title: `「ღ」| Asupan`, rowId: ".? asupan", description: "Fitur Pencuci Mata :v"},
{title: `「ღ」| Audio`, rowId: ".? audio", description: "Ubah Audio Menggunakan Filter"},
{title: `「ღ」| Berita`, rowId: ".? berita", description: "Cari Berita Ter Up To Date"},
{title: `「ღ」| Database`, rowId: ".? database", description: "Simpan Sesuatu Di Database Bot"},
{title: `「ღ」| Downloaders`, rowId: ".? downloader", description: "Jangan Download Vokep Ya"},
{title: `「ღ」| Exp`, rowId: ".? xp", description: "Ayo Kumpulkan Exp Dan Naikan Pangkat Mu!"},
{title: `「ღ」| Fun`, rowId: ".? fun", description: "Fitur Yang Aman Dan Sangat Bersahabat"},
{title: `「ღ」| Game`, rowId: ".? game", description: "Gamenya Seru Lho Apalagi Main Sama Temen >,<"},
{title: `「ღ」| Group`, rowId: ".? group", description: "Fitur Yang Cocok Untuk Menjaga Grup"},
{title: `「ღ」| Info`, rowId: ".? info", description: "Info Tentang Bot"},
{title: `「ღ」| Internet`, rowId: ".? internet", description: "Jangan Nyari Yang Aneh Aneh Ya Kak"},
{title: `「ღ」| Kerang`, rowId: ".? kerangajaib", description: "Tenya Apapun Kepada Ketua Club"},
{title: `「ღ」| Maker`, rowId: ".? maker", description: "Buatlah Suatu Karya Di Fitur Ini"},
{title: `「ღ」| Menfess`, rowId: ".? menfess", description: "Mengirim Pesan Secara Anonim"},
{title: `「ღ」| Nsfw`, rowId: ".? nsfw", description: "Eitss Dosa Di Tanggung Sendiri Ya Kak >,<"},
{title: `「ღ」| Nulis`, rowId: ".? nulis", description: "Nulis Doang Kok Males Sih Kak?"},
{title: `「ღ」| Owner`, rowId: ".? owner", description: "Ini Khusus Ownerku !!"},
{title: `「ღ」| Premium`, rowId: ".? premium", description: "Ini Khusus User Premium !!"},
{title: `「ღ」| Quotes`, rowId: ".? quotes", description: "Random Kata Motivasi, Bucin, Inspirasi Dan Lainnya"},
{title: `「ღ」| Rpg`, rowId: ".? rpg", description: "Mari Berpetualang Bersama Bot!!!"},
{title: `「ღ」| Stalking`, rowId: ".? stalker", description: "Mau Stalking Mantan Yah Kak >,<"},
{title: `「ღ」| Stress`, rowId: ".? stress", description: "Ini Fitur Khusus Yang Stress :v"},
{title: `「ღ」| Stikers`, rowId: ".? stiker", description: "Buat Sticker Di Bot"},
{title: `「ღ」| Text Pro`, rowId: ".? textpro", description: "Buat Logo Kamu Disini Dengan Text Custom"},
{title: `「ღ」| Tools`, rowId: ".? tools", description: "Mungkin Fitur Ini Bisa Membantumu"},
{title: `「ღ」| No Category`, rowId: ".? nocategory", description: "Fitur Tanpa Kategory!"},
] },
]
let psan = `_Note: Jangan Spam Jika Ingin Bot Tetap Aktif_`
let usrs = db.data.users[m.sender]
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
let tek = `
╭─「 *Information* 」
┊• *Nama:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
┊• *Tags:* @${m.sender.split`@`[0]}
┊• *Status:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
┊• *Premium:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
┊• *Limit:* ${usrs.limit}
┊• *Level:* ${usrs.level}
┊• *Role:* ${usrs.role}
┊• *Money:* ${usrs.money}
┊• *Pasangan:*  ${usrs.pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya`}
┊• *Uptime:* ${mpt}
┊• *Time:* ${moment.tz('Asia/Jakarta').format('HH')}:${moment.tz('Asia/Jakarta').format('mm')} WIB
┊• *User:* ${Object.keys(global.db.data.users).length}
╰──────────┈༓`
const listMessage = {
text: tek,
footer: wm,
mentions: await conn.parseMention(tek),
title: ``,
buttonText: `Touch Here`, 
sections
}
if (teks == '404') {
return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let wibh = moment.tz('Asia/Jakarta').format('HH')
let wibm = moment.tz('Asia/Jakarta').format('mm')
let wibs = moment.tz('Asia/Jakarta').format('ss')
let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let premium = global.db.data.users[m.sender].premiumTime
let prems = `${premium > 0 ? 'Premium': 'Free'}`
let platform = os.platform()
      let vn = './media/yntkts'
//-----------TIME---------
let ucpn = `${ucapan()}`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let d = new Date(new Date + 3600000)
let locale = 'id'
// d.getTimeZoneOffset()
// Offset -420 is 18.00
// Offset0 is0.00
// Offset420 is7.00
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
//---------------------

let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
return {
help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
prefix: 'customPrefix' in plugin,
limit: plugin.limit,
premium: plugin.premium,
enabled: !plugin.disabled,
}
})
let groups = {}
for (let tag in tags) {
groups[tag] = []
for (let plugin of help)
if (plugin.tags && plugin.tags.includes(tag))
if (plugin.help) groups[tag].push(plugin)
}
conn.menu = conn.menu ? conn.menu : {}
let before = conn.menu.before || defaultMenu.before
let header = conn.menu.header || defaultMenu.header
let body = conn.menu.body || defaultMenu.body
let footer = conn.menu.footer || defaultMenu.footer
let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
let _text = [
before,
...Object.keys(tags).map(tag => {
return header.replace(/%category/g, tags[tag]) + '\n' + [
...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
return menu.help.map(help => {
return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
.replace(/%islimit/g, menu.limit ? llim : '')
.replace(/%isPremium/g, menu.premium ? lprem : '')
.trim()
}).join('\n')
}),
footer
].join('\n')
}),
after
].join('\n')
let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
let replace = {
'%': '%',
p: uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

//----------------- FAKE
let ftoko = {
key: {
fromMe: false,
participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
remoteJid: 'status@broadcast',
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
},
"title": `${ucapan()}`,
"description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
"currencyCode": "US",
"priceAmount1000": "100",
"retailerId": wm,
"productImageCount": 999
},
"businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
}
}
}
let fgif = {
key: {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Nekohime`,
'duration': '99999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': thumb
 }
}
 }
let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

const pp = await conn
			.profilePictureUrl(m.sender, "image")
			.catch((_) => "./src/avatar_contact.png");
			
	await conn.send3TemplateButtonImg(m.chat, fotonya1, text, wm, 'Sewa', '.sewa', 'Owner', '.owner', 'Thanks To', '.tqto', m)
    		
	} catch (e) {
		conn.reply(m.chat, "Maaf, menu sedang error", m)
				throw e
	}
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(tesm|\?)$/i

handler.register = false

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [ye, ' *Years 🗓️*\n',mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
const time = moment.tz('Asia/Jakarta').format('HH')
let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
if (time >= 4) {
res = "Pagi Kak 🌄"
}
if (time >= 10) {
res = "Selamat Siang Kak ☀️"
}
if (time >= 15) {
res = "Selamat Sore Kak 🌇"
}
if (time >= 18) {
res = "Malam Kak 🌙"
}
return res
}
