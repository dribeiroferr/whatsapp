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

router.post("/send", async(req: Request, res: Response) => {
    
    const { to, body } = req.body;
    const toTreated = to + "@c.us"

    await sender.sendText(toTreated, body);
    return res.json({
        message: "Mensagem enviaada com sucesso ao destinatário",
        code: 200
    });
})
