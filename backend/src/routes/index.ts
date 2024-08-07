import { Router } from "express";
import * as UserController from "../modules/user.controller";
import * as InvoiceController from "../modules/invoice.controller";

const routes: Router = Router();

routes.post("/connect-wallet", UserController.connectWallet);
routes.post("/qr-parser", UserController.qrParser);
routes.post("/transfer", UserController.transfer);

routes.get("/check-transaction", InvoiceController.checkTransaction);

routes.post("/transactions", UserController.transactions);

export default routes;
