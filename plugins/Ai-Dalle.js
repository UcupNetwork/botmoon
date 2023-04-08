import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
    if (!text) throw `Teksnya`
	let url = `https://api.itsrose.site/image/stable/diffusion?prompt=${text}&apikey=Rs-Zeltoria${global.itsrose}`
	conn.sendButton(m.chat, 'Nih Kak Resultnya', wm, await(await fetch(url)).buffer(), [['\nMakasih',`oke`]],m)
}
handler.command = /^(aidraw)$/i
handler.tags = ['ai']
handler.help = ['aidraw']
handler.limit = true
handler.premium = false
export default handler
