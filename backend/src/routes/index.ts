import { Router } from "express";
import * as UserController from "../modules/user.controller";

const routes: Router = Router();

routes.post("/connect-wallet", UserController.connectWallet);
routes.post("/qr-parser", UserController.qrParser);

export default routes;