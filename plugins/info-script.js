import fs from 'fs'

let handler = async (m, { conn }) => {
	let krtu = `Thanks To :
	
• Adiwajshing
https://github.com/adiwajshing

• Nurutomo
https://github.com/Nurutomo

• BochilGaming
https://github.com/BochilGaming

• Shirokami Ryzen
https://github.com/ShirokamiRyzen

• Ekuzika
http://github.com/Rmdhn-20

• David 
https://github.com/xct007

Dan Semua Yang Berkontribusi 
Dalam Pengambangan Script Ini

Penulis Ulang : Zeltoria
https://github.com/Zeltoria

My Support : All Creator Bot`;
	await conn.sendButton(m.chat, krtu, botdate, fotonya2, [['\nKakek Gw Sugiono','huuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: 'Yaemiko-Multidevice',
                        body: wm,          previewType: 0,
                        thumbnail: fs.readFileSync("./thumbnail.jpg"),
                        sourceUrl: sig
                      }}
})
}
handler.command = /^(thankstoo|thanksto|credits|tqto)$/i;
handler.group = false;

export default handler;
