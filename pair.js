const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: ALEX_PIKU_MD,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function ALEX_PIKU_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_ALEX_PIKU_MD = ALEX_PIKU_MD({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_ALEX_PIKU_MD.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_ALEX_PIKU_MD.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_ALEX_PIKU_MD.ev.on('creds.update', saveCreds)
            Pair_Code_By_ALEX_PIKU_MD.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_ALEX_PIKU_MD.sendMessage(Pair_Code_By_ALEX_PIKU_MD.user.id, { text: 'ALEX_PIKU_MD;;;' + b64data });

               let ALEX_PIKU_MD = `
*Pair Code By ALEX_PIKU_MD*
*Made With 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷*
*_Remember to remove 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷;;; part and leave eyjubl...._*
*_follow our channel and share it https://whatsapp.com/channel/0029VaYESUGJkK7F76XsDj3L*
*keep using WhatsApp bots from 𝛥𝐿𝛯𝛸_𝛲𝛪𝛫𝑈_𝛭𝐷*

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_ALEX_PIKU_MD.sendMessage(Pair_Code_By_ALEX_PIKU_MD.user.id,{text:ALEX_PIKU_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Venocyber_Tech.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    ALEX_PIKU_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await ALEX_PIKU_MD_PAIR_CODE()
});
module.exports = router
