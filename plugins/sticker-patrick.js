import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async(m,{text, conn}) => {
let res = 'https://api.zeeoneofc.my.id/api/telegram-sticker/patrick?apikey=RCo6vEcS'
m.reply('_Sedang Membuat..._\n*Mohon Tunggu Sekitar 3/4 Menit*')
let stiker = await sticker(null, res, global.stickpack, global.stickauth)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}
handler.help = ['patrick']
handler.tags = ['sticker']
handler.command = /^(patrick)$/i
handler.limit = true

export default handler