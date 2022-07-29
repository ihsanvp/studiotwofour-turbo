import { Router } from "express";
import * as AssetsController from "app/controllers/asset.controller";

const router = Router();

router.post("/upload", AssetsController.upload);

router.get("/", AssetsController.list);

export default router;
