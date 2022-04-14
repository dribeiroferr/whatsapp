import {
    Whatsapp,
    create, 
    Message, 
    SocketState
} from "venom-bot";

export class SenderTest { 
    private client: Whatsapp;

    constructor() {};

    private initialize(){

        const status = (statusSession: string) => {

        }

        const start = (client:Whatsapp) => {}

        create("ws-restaurante-atendimento-test", (base64Qr: string, asciiQR: string
        ) => {

            var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
            response : object | any = {};

            if (matches.length !== 3) {
                return new Error('Invalid input string');
            }
            response.type = matches[1];
            response.data = Buffer.from(matches[2], 'base64');

            var imageBuffer = response;
            require('fs').writeFile(
                'out.png',
                imageBuffer['data'],
                'binary',
                function (err) {
                if (err != null) {
                    console.log(err);
                }
                }) 
    })}}
