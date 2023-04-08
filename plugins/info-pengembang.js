import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'creator') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Danil Elistz\nNICKNAME: Zeltoria\nORG: Zeltoria\nTITLE:\nitem1.TEL;waid=6285776353741:+62 857 7635 3741\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://zeltoria.github.io\nitem2.EMAIL;type=INTERNET: elistz21@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
}
if (command == 'pengembang') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Danil Elistz\nNICKNAME: Zeltoria\nORG: Zeltoria\nTITLE:\nitem1.TEL;waid=6285776353741:+62 857 7635 3741\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://zeltoria.github.io\nitem2.EMAIL;type=INTERNET: elistz21@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
}
}
handler.help = ['pengembang', 'creator']
handler.tags = ['info','main']

handler.command = /^(creator|pengembang)$/i

export default handler