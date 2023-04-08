import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
    if (!text) throw `Teksnya`
	let url = `https://api.itsrose.site/image/anime/diffusion?prompt=${text}&apikey=${global.itsrose}`
	conn.sendButton(m.chat, 'Nih Kak Resultnya', wm, await(await fetch(url)).buffer(), [['\nMakasih',`oke`]],m)
}
handler.command = /^(aianime|animedif)$/i
handler.tags = ['ai']
handler.help = ['aianime','animedif']
handler.limit = true
handler.premium = false
export default handler
