import { Button, Center, Container, Group, Text } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { useState } from "react";
import { http } from "../../utils/http";

export default function AssetsUploadPage() {
  const [files, setFiles] = useState<File[]>([]);

  async function upload() {
    if (files.length) {
      const res = await Promise.all(
        files.map((file) => {
          const data = new FormData();
          data.append("file", file);
          return http.post("/assets/upload", data);
        })
      );

      res.forEach((r) => {
        console.log(r.data);
      });

      setFiles([]);
    }
  }

  return (
    <div>
      <Container py={40}>
        <Dropzone
          onDrop={(files) => setFiles(files)}
          onReject={(files) => console.log("rejected files", files)}
        >
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: 220, pointerEvents: "none" }}
          >
            <Dropzone.Accept>
              {/* <IconUpload
            size={50}
            stroke={1.5}
            color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
          /> */}
            </Dropzone.Accept>
            <Dropzone.Reject>
              {/* <IconX
            size={50}
            stroke={1.5}
            color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
          /> */}
            </Dropzone.Reject>
            <Dropzone.Idle>
              {/* <IconPhoto size={50} stroke={1.5} /> */}
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed
                5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
        <Center mt={20}>
          <Button onClick={upload}>Upload</Button>
        </Center>
      </Container>
    </div>
  );
}
