import { Request, Response } from "express";
import sharp from 'sharp';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as dotenv from 'dotenv';

dotenv.config();

const s3 = new S3Client({
	region: process.env.AWS_BUCKET_REGION,
	credentials: {
		accessKeyId: String(process.env.AWS_USER_ACCESS_KEY),
		secretAccessKey: String(process.env.AWS_SECRET_KEY)
	}
});


export async function uploadImage(request: Request, response: Response): Promise<string> {
	const file = request.file;
	const fileName = `${Date.now()}-${file?.filename}`;
	const bucketName = String(process.env.AWS_BUCKET_NAME);

	const fileBuffer = await sharp(file?.buffer)
		.resize({ width: 242, height: 109, fit: 'contain' })
		.toBuffer();

	const uploadParams = {
		Bucket: bucketName,
		Body: fileBuffer,
		Key: `/${bucketName}/acaimages/${fileName}`,
		ContentType: file?.mimetype
	};

	await s3.send(new PutObjectCommand(uploadParams));
	response.json({ 'OK': "Image uploaded" }).status(201);
	console.log(fileName);

	return fileName;
}
