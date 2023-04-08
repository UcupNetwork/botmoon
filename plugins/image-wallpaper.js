import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
    if (!text) throw 'Mau Cari Apa?'
	let zeltoria = `https://api.lolhuman.xyz/api/wallpaper?apikey=${global.lolkey}&query=${text}`
	conn.sendButton(m.chat, 'Nih Kak Hasil Pencariannya', wm, await(await fetch(zeltoria)).buffer(), [['Berikutnya',`.${command}`]],m)
}
handler.help = ['wallpaper2','wp2']
handler.tags = ['downloader','internet']
handler.command = /^(wallpaper2|wp2)$/i

handler.limit = true

export default handler