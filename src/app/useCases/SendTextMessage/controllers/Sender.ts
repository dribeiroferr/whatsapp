import { Request, Response } from "express";
import {
    Whatsapp,
    create, 
    Message, 
    SocketState
} from "venom-bot";

import { botConfig } from "../../../utils/config/botConfig"

const venom = require('venom-bot');

import { existsSync, readFileSync, unlink } from 'fs'
import { mkdir, writeFile } from "fs/promises";
import fs from "fs";

import { TBrowserSessionToken } from "../../../utils/types/types";
export class Sender {
    
    private client: Whatsapp;

    constructor() {
        this.initialize();
    };

    public async sendText(to: string, body: string){

        await this.client.sendText(to, body)
    };

    private initialize(){
        const log = (value: any) => console.log(value)
        const qr = (base64Qrimg: string) => {};
        const status = (statusSession: string) => {};
        
            try {
                
                const start = (client:Whatsapp) => {
                    this.client = client;
                };

                
                // /**
                //  * checagem de caminhos
                //  * @param path 
                //  * @returns 
                //  */

                // const check = (path: string) => existsSync(path);
                // // definindo pasta padrão para checagen de tokens
                // const path = './tokens'
                // // // definindo arquivo padrão para checagem de token
                // const sessionPath = `${path}/${botConfig.baseName}.json`
                // // const sessionPath = `${path}/${botConfig.baseName}.json`

                // async function saveToken(client: Whatsapp) {
                //     /**
                //      * verificandp se a pasta tokens existe;
                //      * se não existir ela será criada
                //      */
                //     if (!check(path)) await mkdir(path)
                //     // recuperando o token da sessão do navegador
                //     const browserSessionToken = await client.getSessionTokenBrowser()
                //     /**
                //      * verificando se a sessão existe;
                //      * se não existir a variável browserSessionToken será escrita na pasta
                //      */
                //     if (!check(sessionPath)) writeFile(sessionPath, JSON.stringify(browserSessionToken))
                // }
                // /**
                //  * ler arquivo token
                //  * @returns 
                //  */

                //  function readToken(): TBrowserSessionToken | undefined {
                //     try {
                //         return JSON.parse(readFileSync(sessionPath, 'utf-8'))
                //     } catch (error) {
                //         console.log({
                //             status: 404,
                //             message: 'o arquivo token não existe.\nCriando arquivo token',
                //         })
                //     }
                // }

                /**
                 * função que faz o gerenciamento do bot
                 * @param client 
                 */


                 const TOKEN_DIR = __dirname + "../../../../../tokens";
                 console.log(TOKEN_DIR);
                 
                 const TOKEN_PATH: string = TOKEN_DIR + "/wpp-restaurante-atendimento.json";
                 
                 console.log(TOKEN_PATH)
                 
                 var browserSessionToken = null;
                 
                 if (fs.existsSync(TOKEN_PATH)) {
                   browserSessionToken = JSON.parse(readFileSync(TOKEN_PATH, 'utf-8'));
                   console.log('bateu aqui : ', browserSessionToken);
                 }
                 
                 venom
                   .create({
                     session: 'wpp-restaurante-atendimento', //name of session
                     multidevice: false, // for version not multidevice use false.(default: true)
                     folderNameToken: TOKEN_PATH, //folder name when saving tokens
                     createPathFileToken: true,
                     headless: true,
                     browserSessionToken: browserSessionToken,
                   })
                   .then((client) => {
                     client.getSessionTokenBrowser().then((result) => {
                       fs.promises.mkdir(TOKEN_DIR, { recursive: true })
                         .then(s => {
                           fs.writeFile(
                             TOKEN_PATH, 
                             JSON.stringify(result), 
                             function(err) {
                               if(err) return 
                               console.error(err);
                             });
                           }).catch((error) => { console.error(error)});
                       }).catch((error) => { console.error(error)});
                       
                       // Start client in parallel
                       start(client);
                   })
                   .catch((erro) => {
                     console.log(erro);
                   });
    
    
            } catch (error) {
                console.error(error);
                return error;
            }
        }
};

    // private client: Whatsapp;

    // constructor() {
    //     this.initialize();
    // };

    // public async sendText(to: string, body: string){

    //     await this.client.sendText(to, body)
    // };

    // private initialize(){
    //     const qr = (base64Qrimg: string) => {};
    //     const status = (statusSession: string) => {};

    //     const start = (client:Whatsapp) => {
    //         this.client = client;
    //     };

    //     create("ws-restaurante-atendimento", qr, status)
    //     .then((client) => start(client))
    //     .catch((error) => console.error(error// };

