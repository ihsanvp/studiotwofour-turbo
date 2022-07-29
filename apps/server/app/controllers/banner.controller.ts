import { extractBanner, getBannerUrl } from "app/utils/banner.util";
import prisma from "app/utils/prisma.util";
import { Response, Request } from "express";

export async function list(req: Request, res: Response) {
  const banners = await prisma.banner.findMany({
    include: {
      asset: true,
    },
  });

  res.json({
    banners: banners.map((banner) => ({
      ...banner,
      url: getBannerUrl(req, banner.path),
    })),
  });
}

export async function createFromAsset(req: Request, res: Response) {
  if (typeof req.body.id == "undefined") {
    return res.status(400).send("Invalid id");
  }

  if (typeof req.body.width == "undefined") {
    return res.status(400).send("Invalid width");
  }

  if (typeof req.body.height == "undefined") {
    return res.status(400).send("Invalid height");
  }

  const asset = await prisma.asset.findUnique({
    where: {
      id: req.body.id,
    },
  });

  if (asset == null) {
    return res.status(400).send("Invalid Id");
  }

  if (!["application/x-zip-compressed"].includes(asset.mime)) {
    return res.status(400).send("Cannot create banner");
  }

  const bannerPath = await extractBanner(asset);

  const banner = await prisma.banner.create({
    data: {
      path: bannerPath,
      width: parseInt(req.body.width),
      height: parseInt(req.body.height),
      asset: {
        connect: {
          id: asset.id,
        },
      },
    },
  });

  res.json({
    banner: {
      ...banner,
      url: getBannerUrl(req, banner.path),
    },
  });
}

export async function upload(req: Request, res: Response) {}
