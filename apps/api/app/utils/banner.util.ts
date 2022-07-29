import fs from "fs";
import { TEMP_DIR, UPLOAD_DIR } from "app/configs/general.config";
import { Asset } from "app/db";
import extract from "extract-zip";
import { glob } from "glob";
import path from "path";
import { ensureDirAsync } from "./fs.util";
import { Request } from "express";

export function extractBanner(asset: Asset): Promise<string> {
  return new Promise(async (resolve, reject) => {
    const tempDir = path.join(TEMP_DIR, asset.id);

    await ensureDirAsync(tempDir);
    await extract(asset.path, { dir: tempDir });

    const pattern = path.join(tempDir, "/**/*.html").replace(/\\/g, "/");
    glob(pattern, (err, files) => {
      if (err) {
        return reject(err);
      }

      if (!files.length) {
        return reject(new Error(".html file not found"));
      }

      files.forEach((file) => {
        const parsed = path.parse(file);

        if (parsed.name != "index") {
          fs.renameSync(file, path.join(parsed.dir, "index.html"));
        }

        const target = path.join(UPLOAD_DIR, "banners", asset.id);

        fs.cpSync(parsed.dir, target, { recursive: true });
        fs.rmSync(tempDir, { recursive: true });
        resolve(target);
      });
    });
  });
}

export function getBannerUrl(req: Request, location: string) {
  const base = req.protocol + "://" + req.get("Host");
  const urlPath = path
    .relative(path.join(process.cwd(), "uploads"), location)
    .replace(/\\\\/g, "/")
    .replace(/\\/g, "/");

  return encodeURI(base + "/uploads/" + urlPath);
}
