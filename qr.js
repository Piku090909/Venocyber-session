const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷_PAIR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷 = 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷.ev.on('creds.update', saveCreds)
			Qr_Code_By_𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷.sendMessage(Qr_Code_By_𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷.user.id, { text: '𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷;;;' + b64data });
	
				   let 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷_TEXT = `
*_Qr Code By 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷_*
*_Made With 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷_*
*_Remember to remove 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷;;; part and leave eyjubl...._*
*_follow our channel and share it https://whatsapp.com/channel/0029VaYESUGJkK7F76XsDj3L*
*keep using WhatsApp bots from 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷_*
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷.sendMessage(Qr_Code_By_𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷.user.id,{text:𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷_QR_CODE()
});
module.exports = router
