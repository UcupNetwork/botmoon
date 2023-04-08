import fetch from 'node-fetch'
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!text) throw `Judulnya?`
    try {
        let res = await fetch(`https://api.lolhuman.xyz/api/anime?apikey=${global.lolkey}&query=${text}`)
        let json = await res.json()
        let get_result = json.result
        let ini_txt = `Title : *${get_result.title.romaji}*\n`
        ini_txt += `English : *${get_result.title.english}*\n`
        ini_txt += `Native : *${get_result.title.native}*\n\n`
        ini_txt += `Format : ${get_result.format}\n`
        ini_txt += `Episodes : ${get_result.episodes}\n`
        ini_txt += `Duration : ${get_result.duration} mins.\n`
        ini_txt += `Status : ${get_result.status}\n`
        ini_txt += `Season : ${get_result.season}\n`
        ini_txt += `Season Year : ${get_result.seasonYear}\n`
        ini_txt += `Source : ${get_result.source}\n`
        ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
        ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
        ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
        ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
        ini_txt += `*Score : ${get_result.averageScore}%*\n\n`
        ini_txt += `*Characters :*\n`
        let ini_character = get_result.characters.nodes
        for (var x of ini_character) {
            ini_txt += `- ${x.name.full} (${x.name.native})\n`
        }
        ini_txt += `\n*Description :*\n${get_result.description}`
        conn.sendFile(m.chat, get_result.coverImage.large, 'anianime.jpg', ini_txt, m)
    } catch (e) {
        console.log(e)
        m.reply(`Tidak Ditemukan Hasil.`)
    }
}
handler.help = ['animeinfo']
handler.tags = ['anime', 'limitmenu']
handler.command = /^(animeinfo)$/i
handler.limit = true
export default handler
