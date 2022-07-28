import prisma from "app/utils/prisma.util";
import { asyncFileUpload } from "app/utils/upload.util";
import { Response, Request } from "express";
import { UploadedFile } from "express-fileupload";

export async function upload(req: Request, res: Response) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.file as UploadedFile;
  const filePath = await asyncFileUpload(file);
  const asset = await prisma.asset.create({
    data: {
      name: file.name,
      size: file.size,
      path: filePath,
    },
  });

  res.json({ asset });
}
