let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = db.data.users[who]
    if (!who) throw `Yang Mau Di Jadiin Premium Siapa Sayangku?`
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw `Berapa Hari Sayang??`
    if (isNaN(txt)) return m.reply(`Hanya Nomor Sayang!`)
    var jumlahHari = 86400000 * txt
    var now = new Date() * 1
    if (now < user.premiumTime) user.premiumTime += jumlahHari
    else user.premiumTime = now + jumlahHari
    user.premium = true
    m.reply(`Berhasil!\n*${user.name}* Sekarang Menjadi User Premium, Selama ${txt} Hari.`)
}
handler.help = ['addprem']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)p(rem)?$/i

handler.rowner = true

export default handler