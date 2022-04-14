import {
    Whatsapp,
    create, 
    Message, 
    SocketState
} from "venom-bot";

export class Sender { 
    private client: Whatsapp;

    constructor() {
        this.initialize();
    };

    public async sendText(to: string, body: string){

        await this.client.sendText(to, body)
    }

    private initialize(){
        const qr = (
            base64Qr?:string,
            base64Qrimg?: string,
            ) => {

                console.log('base64 image string qrcode: ', base64Qrimg);

            };
        const status = (statusSession: string) => {

        }

        const start = (client:Whatsapp) => {
            this.client = client;

            // this.sendText("5511966339949", "🤡 olá ramão bobão")
        }

        create("ws-restaurante-atendimento", qr, status)
        .then((client) => start(client))
        .catch((error) => console.error(error));
    }
}