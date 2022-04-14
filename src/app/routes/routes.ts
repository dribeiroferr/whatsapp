import { Router } from "express";
import { options } from "../utils/config/CorsOptions"

import { Sender } from "../useCases/SendTextMessage/controllers/Sender";

import cors from "cors";
import { Request, Response } from "express-serve-static-core";

export const router = Router();

const sender = new Sender();

//cors middleware:
router.use(cors(options));

//enable pre-flight:
router.options('*', cors(options));


// Rota post: 

/**
 * 
 * Aqui a rota precisará dos parâmetros: 
 * {
 *  "to": "string", <= Telefone para quem ele enviará a mensagem
 *  "body": "string" <= Corpo de mensagem de texto 
 * }
 * 
 */

router.post("/api/send", async(req: Request, res: Response) => {
    try {
        const { to, body } = req.body;
        const toTreated = to + "@c.us"

        await sender.sendText(toTreated, body);
        return res.json({
            message: "Mensagem enviada com sucesso ao destinatário",
            code: 200
        });    
    } catch (error) {
        console.error(error);
        return res.json({
            message: "Algo deu errado, favor verificar logs e tentar mais tarde."
        });
    }
    
});