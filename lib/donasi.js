exports.donasi = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagram, telegram, youtube, kapanbotaktif, grupch1, grupch2) => {
	return `🐼{ *MENU DONASI ${BotName}* }🐼
  
  
TERIMA KASIH
*${id.split("@s.whatsapp.net")[0]}*
TELAH MEMBUKA MENU DONASI
🐼🐼


🗓*${tampilTanggal}* 🐼
⏰*${tampilWaktu}* 🐼
(Waktu Server)

KALIAN BISA DONASI MENGGUNAKAN
   
🛡 *PULSA*: 0895632062894


⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇
FOLLOW INSTAGRAM SAYA
${instagram}

🐼TELEGRAM : ${telegram}

`
}
