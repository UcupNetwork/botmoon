let handler = async (m, { conn }) => conn.reply(m.chat, `
${['gws 🗿', 'orang gila 🏃', 'tobat bg', 'sange kok sm makanan 🗿\nsudah gila', 'awokawok stress', 'sdh tidak bisa diselamatkan', 'kasiann, mana masih muda lagi', 'mna bisa gblok', 'lah? 🗿', 'agak laen 🗿'].getRandom()}
  `.trim(), m, m.mentionedJid ? {
    mentions: m.mentionedJid
} : {})


handler.customPrefix = /(kalo liat martabak gw suka sange)/
handler.command = new RegExp();

export default handler