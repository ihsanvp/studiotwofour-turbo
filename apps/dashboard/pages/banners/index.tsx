import { Box, Button, Container, Divider, Group, Title } from "@mantine/core";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useState } from "react";
import { http } from "../../utils/http";

type Asset = {
  id: string;
  name: string;
  path: string;
  size: number;
};

type Banner = {
  id: string;
  path: string;
  width: number;
  height: number;
  url: string;
  assetId: string;
  asset: Asset;
};

type Props = {
  assets: Asset[];
  banners: Banner[];
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const a = await http.get("/assets");
  const b = await http.get("/banners");

  return {
    props: {
      assets: a.data.assets || [],
      banners: b.data.banners || [],
    }, // will be passed to the page component as props
  };
};

type P = InferGetStaticPropsType<typeof getStaticProps>;

export default function BannersPage(props: P) {
  const [banners, setBanners] = useState<Banner[]>(props.banners);

  async function createBanner(id: string) {
    await http.post("/banners/create-from-asset", {
      width: 300,
      height: 600,
      id,
    });

    const res = await http.get("/banners");
    setBanners(res.data.banners || banners);
  }

  return (
    <div>
      <Container py={40}>
        <Group grow align="start">
          <div>
            <Title>Banners</Title>
            <Box mt={40}>
              {banners.length
                ? banners.map((banner) => (
                    <Button
                      my={5}
                      fullWidth
                      key={banner.id}
                      component="a"
                      href={banner.url}
                      target="_blank"
                    >
                      {banner.asset.name}
                    </Button>
                  ))
                : null}
            </Box>
          </div>
          <div>
            <Title>Assets</Title>
            <Box mt={40}>
              {props.assets.length
                ? props.assets.map((asset) => (
                    <Button
                      key={asset.id}
                      my={5}
                      fullWidth
                      variant="light"
                      onClick={() => createBanner(asset.id)}
                    >
                      {asset.name}
                    </Button>
                  ))
                : null}
            </Box>
          </div>
        </Group>
      </Container>
    </div>
  );
}
