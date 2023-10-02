import { NextApiRequest, NextApiResponse } from "next"
import { nanoid } from "nanoid/async"
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new S3Client({
    region: "sa-east-1",
    credentials: {
      accessKeyId: process.env.ACCESS_KEY!,
      secretAccessKey: process.env.SECRET_KEY!,
    }
  })

  const command = new PutObjectCommand({
    Bucket: "vem-asdf",
    Key: req.query.file as string,
    ContentType: req.query.fileType as string
  })

  const preSignedUrl = await getSignedUrl(client, command)

  res.status(200).json({
    "url": preSignedUrl
  })
}
