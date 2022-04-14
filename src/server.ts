import express, { urlencoded } from "express";
import { router } from "./app/routes/routes";

const app = express();
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(router);

const port : number = 9001;

app.listen(port, () => {
    console.log("🚀 Server is running on: ", port);
});