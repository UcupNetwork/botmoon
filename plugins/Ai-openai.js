import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${global.lolkey}&text=${text}&user=user-unique-id`)
    let komcol = await res.json()
   m.reply(komcol.result)
}
handler.help = ['ai','openai']
handler.tags = ['stalker']
handler.command = /^(ai|openai|yae)$/i
handler.limit = true
export default handler
