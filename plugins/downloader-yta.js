import fetch from 'node-fetch'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import { niceBytes, isUrl, somematch } from '../lib/others.js'

let handler = async (m, { conn, text, args, command }) => {
	if (!text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))) return m.reply(`Linknya?.`)
	command = command.toLowerCase()
	try {
		const { audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
		let audio, source, res, link, lastError, sizeh
		for (let i in _audio) {
			try {
				audio = _audio[i]
				link = await audio.download()
				sizeh = await audio.fileSize
				if (link) res = await fetch(link)
				if (res) source = await res.arrayBuffer()
				if (source instanceof ArrayBuffer) break
			} catch (e) {
				audio = link = source = null
				lastError = e
			}
		}
		if (sizeh > 300000) throw `Filesize: ${audio.fileSizeH}\nTidak Dapat Mengirim, Maksimal File 300 MB`
		if (!link) throw new Error('No URL')
		if (command.includes('mp3')) await conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted : m })
		else await conn.sendMessage(m.chat, { audio: { url: link }, mimetype: 'audio/mp4' }, { quoted : m })
	} catch (e) {
		console.log(e)
		try {
			let res = await fetch(`https://api.lolhuman.xyz/api/ytaudio?apikey=${global.lolkey}&url=${text}`)
			let anu = await res.json()
			anu = anu.result
			let vsize = anu.link.size.slice(-2)
			if (vsize == "GB") return m.reply(`Ngotak Dong.\nMana Bisa Ngirim Video ${anu.link.size}`)
			if (!somematch(['kB','KB'], vsize) && parseInt(anu.link.size.replace(" MB", "")) > 200) return m.reply(`Filesize: ${anu.link.size}\nTidak Dapat Mengirim, Maksimal File 300 MB`)
			if (!anu.link.link) throw new Error('Error')
			if (command.includes('mp3')) await conn.sendMessage(m.chat, {document: { url: anu.link.link }, mimetype: 'audio/mpeg', fileName: `${anu.result.title}.mp3`}, { quoted : m })
			else await conn.sendMessage(m.chat, { audio: { url: anu.link.link }, mimetype: 'audio/mp4' }, { quoted : m })
		} catch (e) {
			console.log(e)
			try {
				let res = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${global.lolkey}&url=${text}`)
				let anu = await res.json()
				anu = anu.result
				let vsize = anu.size.slice(-2)
				if (vsize == "GB") return m.reply(`Ngotak Dong.\nMana Bisa Ngirim Video ${anu.size}`)
				if (!somematch(['kB','KB'], vsize) && parseInt(anu.size.replace(" MB", "")) > 200) return m.reply(`Filesize: ${anu.size}\nTidak Dapat Mengirim, Maksimal File 300 MB`)
				if (!anu.link) throw new Error('Error')
				if (command.includes('mp3')) await conn.sendMessage(m.chat, {document: { url: anu.link }, mimetype: 'audio/mpeg', fileName: `${anu.result.title}.mp3`}, { quoted : m })
				else await conn.sendMessage(m.chat, { audio: { url: anu.link }, mimetype: 'audio/mp4' }, { quoted : m })
			} catch (e) {
				console.log(e)
				throw `Terjadi Kesalahan.`
			}
		}
	}
}

handler.help = ['ytmp3', 'yta']
handler.tags = ['downloader']
handler.command = /^yt(a|mp3)$/i

handler.register = false
handler.limit = true

export default handler