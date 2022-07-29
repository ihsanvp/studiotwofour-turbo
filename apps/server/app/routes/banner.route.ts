import { Router } from "express";
import * as BannerController from "app/controllers/banner.controller";

const router = Router();

router.post("/create-from-asset", BannerController.createFromAsset);

router.get("/", BannerController.list);

export default router;
