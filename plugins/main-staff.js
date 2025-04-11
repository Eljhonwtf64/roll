let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `✨ *EQUIPO DE AYUDANTES*
🤖 *Bot:* ${global.botname}
🌟 *Versión:* ${global.vs}

👑 *Propietario:*

• ꧁༒☬𝕵𝖍𝖔𝖓☬༒꧂
🤴 *Rol:* Propietario
📱 *Número:* wa.me/584142577312
✨️ *GitHub:* https://github.com/TOKIO5025

🚀  *Colaboradores:*

• ꧁༒☬𝕵𝖍𝖔𝖓☬༒꧂ (2)
🦁 *Rol:* Developer
📱 *Número:* Wa.me/584125014674

• JG
🐯 *Rol:* Contribuidor
📱 *Número:* Wa.me/582129443583

await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `✨ Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
