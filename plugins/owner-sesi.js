import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('Tunggu Sebentar, Sedang Mengambil File Sesi Mu')
    let sesi = await fs.readFileSync('./Yaemiko.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'Yaemiko.json' }, { quoted: m })
}
handler.help = ['getsession']
handler.tags = ['owner']
handler.command = /^(g(et)?ses?si(on)?(data.json)?)$/i

handler.rowner = true

export default handler
