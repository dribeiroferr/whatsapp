// // Classe em estudo para enviar o QR Code

// import {
//     Whatsapp,
//     create, 
//     Message, 
//     SocketState
// } from "venom-bot";

// export class Authenticate { 
//     private client: Whatsapp;

//     constructor() {
//         this.initialize();
//     };

    
//     async sendText(to: string, body: string){

//         await this.client.sendText(to, body)
//     }

//     private initialize(){

//         create("ws-restaurante-atendimento-test", (base64Qr: string, asciiQR: string
//         ) => {

//             var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
//             response : object | any = {};

//             if (matches.length !== 3) {
//                 return new Error('Invalid input string');
//             }
//             response.type = matches[1];
//             response.data = Buffer.from(matches[2], 'base64');

//             var imageBuffer = response;
//             require('fs').writeFile(
//                 'out.png',
//                 imageBuffer['data'],
//                 'binary',
//                 function (err) {
//                 if (err != null) {
//                     console.log(err);
//                 }
//                 });
//     })}}
