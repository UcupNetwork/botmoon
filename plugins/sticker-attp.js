/*
let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', m, false, { asSticker: true })
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

export default handler
*/
let handler = async(m, { conn, text, args, usedPrefix, command }) => {
    if (!text) throw `Teksnya?`
    let teks = encodeURI(text)
    if (command == 'attp') {
    conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${global.lolkey}&text=${teks}`, 'sticker.webp', '', m, { asSticker: true })}
    }
    handler.help = ['attp']
    handler.tags = ['sticker']
    
    handler.command = /^attp$/i
    handler.limit = true
    
    export default handler