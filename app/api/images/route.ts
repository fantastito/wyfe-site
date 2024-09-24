import { NextResponse } from "next/server";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Perform GET request on S3 bucket for image URL
export async function GET(request: Request) {
  const url = new URL(request.url);
  const imageName = url.searchParams.get('key'); 

  // Fail gracefully
  if (!imageName) {
    return new NextResponse('Image key is required', { status: 400 });
  }

  // Credentials
  const s3 = new S3Client({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
    },
    region: process.env.AWS_REGION
  });

  // Get the URL
  try {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME!,
      Key: imageName,
    });

    const url = await getSignedUrl(s3, command, { expiresIn: 3600 });

    return new NextResponse(url);
  
  // Fail gracefully
  } catch (error) {
    console.error('Error fetching image from S3:', error);
    return new NextResponse('Error fetching image from S3', { status: 500 });
  }
}
