import { config } from "dotenv";
config();

import express from "express";
import { Request, Response } from "express";
import fileUpload, { UploadedFile } from "express-fileupload";
import path from "path";
import fs from "fs";
import prisma from "./utils/prisma.util";
import extract from "extract-zip";
import glob from "glob";
import { ensureDir } from "./utils/fs.util";
import { PORT, TEMP_DIR, UPLOAD_DIR } from "./configs/general.config";
import AssetsRouter from "./routes/asset.route";
import BannersRouter from "./routes/banner.route";
import cors from "cors";

ensureDir(UPLOAD_DIR);
ensureDir(TEMP_DIR);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static(UPLOAD_DIR));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes
app.use("/assets", AssetsRouter);
app.use("/banners", BannersRouter);

function cleanBannerFile(location: string, dir: string): Promise<string> {
  return new Promise((resolve, reject) => {
    glob(
      path.join(location, "/**/*.html").replace(/\\/g, "/"),
      (err, files) => {
        if (err) {
          return reject(err);
        }

        files.forEach((file) => {
          const parsed = path.parse(file);

          if (parsed.name != "index") {
            fs.renameSync(file, path.join(parsed.dir, "index.html"));
          }

          const target = path.join(UPLOAD_DIR, "extracted", dir);

          fs.cpSync(parsed.dir, target, { recursive: true });
          resolve(target);
        });
      }
    );
  });
}

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world",
  });
});

app.post("/api/assets/upload", (req: Request, res: Response) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.file as UploadedFile;
  const uploadPath = path.join(UPLOAD_DIR, file.name);

  file.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({
      message: "uploaded",
      file: file,
    });
  });
});

// app.post("/api/banners/upload", async (req: Request, res: Response) => {
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("No files were uploaded.");
//   }

//   if (typeof req.body.width == "undefined") {
//     return res.status(400).send("Invalid width");
//   }

//   if (typeof req.body.height == "undefined") {
//     return res.status(400).send("Invalid height");
//   }

//   const file = req.files.file as UploadedFile;

//   const parsed = path.parse(file.name);

//   if ([".zip"].includes(parsed.ext)) {
//     const uploadPath = await asyncUpload(file);

//     const asset = await prisma.asset.create({
//       data: {
//         name: file.name,
//         path: uploadPath,
//         size: file.size,
//       },
//     });
//     const banner = await prisma.banner.create({
//       data: {
//         width: parseInt(req.body.width),
//         height: parseInt(req.body.height),
//         asset: {
//           connect: {
//             id: asset.id,
//           },
//         },
//       },
//     });

//     const extractDir = path.join(UPLOAD_DIR, "tmp", banner.id.toString());

//     if (!fs.existsSync(extractDir)) {
//       fs.mkdirSync(extractDir, { recursive: true });
//     }

//     await extract(uploadPath, {
//       dir: extractDir,
//     });

//     await cleanBannerFile(extractDir, banner.id.toString());

//     return res.json({
//       message: "uploaded",
//       file: file,
//       data: req.body,
//     });
//   } else {
//     return res.status(500).send("Invalid file");
//   }
// });

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});
