import { Router } from "express";
import * as AssetsController from "app/controllers/asset.controller";

const router = Router();

router.post("/upload", AssetsController.upload);

export default router;
