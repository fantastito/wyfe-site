import { NextResponse } from "next/server";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const imageName = url.searchParams.get('key'); // Get the image key from query parameters

  if (!imageName) {
    return new NextResponse('Image key is required', { status: 400 });
  }

  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    },
    region: process.env.AWS_REGION
  });

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: imageName, // Use the imageName from query parameters
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 3600 }); // Optional: set expiration time

    return new NextResponse(url);
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    return new NextResponse('Error fetching image from S3', { status: 500 });
  }
}
