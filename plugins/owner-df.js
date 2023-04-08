import { tmpdir } from 'os'
import path, { join } from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {

let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.js', ''))
    if (!text) throw `Uhm..Nama Pluginnya?`
    if (!ar1.includes(args[0])) return m.reply(`*Tidak Di Termukan*\n\n${ar1.map(v => ' ' + v).join`\n`}`)
const file = join(__dirname, '../plugins/' + args[0] + '.js')
unlinkSync(file)
conn.reply(m.chat, `Sukses Menghapus "plugins/${args[0]}.js"`, m)
    
}
handler.help = ['df']
handler.tags = ['owner']
handler.command = /^(df)$/i

handler.mods = true

export default handler
