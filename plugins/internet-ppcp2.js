import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
		let res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${global.lolkey}`)
		if (!res.ok) return m.reply(`Terjadi kesalahan, coba lagi nanti.`)
		let json = await res.json()
		await conn.sendMessage(m.chat, { image: { url: json.result.male }, caption: `Cowo` })
		await conn.sendMessage(m.chat, { image: { url: json.result.female }, caption: `Cewe` })
	} catch (e) {
		let data = await (await fetch('https://raw.githubusercontent.com/ShirokamiRyzen/WAbot-DB/main/fitur_db/ppcp.json')).json()
        let cita = data[Math.floor(Math.random() * data.length)]
        let cowi = await(await fetch(cita.cowo)).buffer()
        await conn.sendFile(m.chat, cowi, '', 'Cowo️', m)
        let ciwi = await(await fetch(cita.cewe)).buffer()
        await conn.sendFile(m.chat, ciwi, '', 'Cewe️', m)
	}
}

handler.help = ['ppcp2']
handler.tags = ['internet']
handler.command = /^ppcp2$/i
handler.limit = true
handler.register = false

export default handler