import { Router } from "express";
import { ServiceController } from "../controller/service.controller";

const serviceRouter = Router();

//* POST
serviceRouter.post("/add", ServiceController.submitService);

//* GET
serviceRouter.get("/fetch/all", ServiceController.fetchAllService);
export { serviceRouter };
