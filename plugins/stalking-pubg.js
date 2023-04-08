import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Masukan ID Nya!!', m)
    let res = await fetch(`https://api.zahwazein.xyz/stalker/nickpubg?apikey=5a2410c812c9&query=${text}`)
    let json = await res.json()
    let hasil = `
• *ID*: ${json.result.gameId}
• *NickName*: ${json.result.userName}
`

    m.reply(hasil)
}
handler.help = ['pubgstalk']
handler.tags = ['stalker']
handler.command = /^(pubgstalk)$/i
handler.limit = true
export default handler
