import { UPLOAD_DIR } from "app/configs/general.config";
import { UploadedFile } from "express-fileupload";
import path from "path";
import { v4 } from "uuid";

export function asyncFileUpload(file: UploadedFile): Promise<string> {
  return new Promise((resolve, reject) => {
    const parsed = path.parse(file.name);
    const name = parsed.name + v4() + parsed.ext;
    const target = path.join(UPLOAD_DIR, parsed.dir, name);

    file.mv(target, (err) => {
      if (err) {
        return reject(err);
      }

      resolve(target);
    });
  });
}
