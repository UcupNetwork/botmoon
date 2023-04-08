import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
	if (!args[0]) throw 'Input URL' 
	if (!/https?:\/\/(www\.)?mediafire\.com/.test(args[0])) throw 'Invalid URL' 
	let res = await fetch(`https://saipulanuar.ga/api/download/mediafire?url=${args[0]}`)
	let data = await res.json()
let json = data.result
let hehe = `_Sedang Di Proses, Mohon Tunggu..._`
m.reply(hehe)
	conn.sendFile(m.chat, json.link, json.title, '', m, null, { mimetype: json.mime, asDocument: true })
}
handler.help = ['mediafire']
handler.tags = ['downloader']
handler.command = /^(mediafire)$/i
handler.limit = true

export default handler
