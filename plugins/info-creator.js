let { MessageType } = (await import("@adiwajshing/baileys")).default;

let handler = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	let type = (args[0] || "").toLowerCase();
	let _type = (args[0] || "").toLowerCase();

	//------- NOMOR
	let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=6287826940361:+62 878 2694 0361\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:${author}\nEND:VCARD`


	//------------ BIO
	let ppown = await conn
		.profilePictureUrl(nomorown + "@s.whatsapp.net", "image")
	let teksbio = `${htki} *BIODATA* ${htka}
• Nama : Muhammad Danil Mnrng
• Nickname : Zeltoria
• Gender : Laki
• Tanggal Lahir : 19 September
• Umur : Ga Sampe 30
• Hobby : Nganggur
• Sifat : Nilai Aja Kalau Udah Kenal
• Tinggal : Medan, Sumatra Utara
• Waifu : Lebih Suka Loli :v
`;
	let teks = "Pilih Di Bawah Kak (〃＾▽＾〃)";
	const sections = [
		{
			title: `Owner`,
			rows: [
				{ title: "Nomor", rowId: ".owner nomor" },
				{ title: "Biodata", rowId: ".owner bio" },
			],
		},
	];

	const listMessage = {
		text: teks,
		footer: null,
		title: `Silahkan Pilih Salah Satu`,
		buttonText: "Touch Me (≧ω≦)",
		sections,
	};

	try {
		if (/(creator|owner)/i.test(command)) {
			const count =
				args[1] && args[1].length > 0
					? Math.min(99999999, Math.max(parseInt(args[1]), 1))
					: !args[1] || args.length < 3
					? 1
					: Math.min(1, count);
			switch (type) {
				case "nomor":
					conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
					break;
				case "bio":
					//conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

					conn.sendButton(
						m.chat,
						teksbio,
						wm,
						ppown,
						[
							["\nSaya Goblok", `huuu`],
							["Menu", `${usedPrefix}tesm`],
						],
						m
					);
					break;

				default:
					return await conn.sendMessage(m.chat, listMessage, m, {
						contextInfo: { mentionedJid: [m.sender] },
					});
			}
		} else if (/enchant|enchan/i.test(command)) {
			const count =
				args[2] && args[2].length > 0
					? Math.min(99999999, Math.max(parseInt(args[2]), 1))
					: !args[2] || args.length < 4
					? 1
					: Math.min(1, count);
			switch (_type) {
				case "t":
					break;
				case "":
					break;

				default:
					return conn.sendButton(
						m.chat,
						caption,
						wm,
						null,
						[`\nOwnernya Ganteng`, `huuu`],
						m
					);
			}
		}
	} catch (err) {
		m.reply("Error\n\n\n" + err.stack);
	}
};
handler.help = ["owner"];
handler.tags = ["main", "info"];
handler.command = /^(owner)/i;

export default handler;
