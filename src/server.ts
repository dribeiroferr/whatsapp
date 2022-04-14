import express, { Request, Response, urlencoded } from "express";
import { router } from "./app/routes/routes";

import { Sender } from "./app/useCases/SendTextMessage/controllers/Sender"

const sender: Sender = new Sender();

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(router);

const PORT = 9001;

app.listen(PORT, () => {
    console.log("🚀 Server is running on: ", PORT);
});