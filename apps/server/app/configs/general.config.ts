import path from "path";

// PORT
export const PORT = process.env.PORT || 8000;

// UPLOAD DIR
export const UPLOAD_DIR = path.resolve(
  process.cwd(),
  process.env.ST_UPLOAD_DIR as string
);

// TEMP DIR
export const TEMP_DIR = path.resolve(
  process.cwd(),
  process.env.ST_TEMP_DIR as string
);
