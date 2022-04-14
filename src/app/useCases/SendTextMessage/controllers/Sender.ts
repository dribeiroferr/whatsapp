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
    };

    private initialize(){
        const qr = (base64Qrimg: string) => {};
        const status = (statusSession: string) => {};

        const start = (client:Whatsapp) => {
            this.client = client;
        };

        create("ws-restaurante-atendimento", qr, status)
        .then((client) => start(client))
        .catch((error) => console.error(error));
    };
}