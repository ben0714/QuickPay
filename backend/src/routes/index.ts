import { Router } from "express";
import * as UserController from "../modules/user.controller";

const routes: Router = Router();

routes.post("/connect-wallet", UserController.connectWallet);
routes.post("/qr-parser", UserController.qrParser);

routes.post("/transactions", UserController.transactions);

export default routes;
