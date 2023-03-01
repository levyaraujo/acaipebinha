import { Request, Response } from "express";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

import * as dotenv from "dotenv";

dotenv.config();

const s3 = new S3Client({
	region: process.env.AWS_BUCKET_REGION,
	credentials: {
		accessKeyId: String(process.env.AWS_USER_ACCESS_KEY),
		secretAccessKey: String(process.env.AWS_SECRET_KEY)
	}
});

export async function getImage(imageName: string) {
	const bucketName = String(process.env.AWS_BUCKET_NAME);
	const downloadParams = {
		Bucket: bucketName,
		Key: `acaimages/${imageName}`
	};

	const data = await s3.send(new GetObjectCommand(downloadParams));
	return data;
}

export async function serveImage(request: Request, response: Response) {
	try {
		const image = await getImage(request.params.imageName);
		console.log(image);


		response.setHeader("Content-Type", image.ContentType?.toString() ?? "image/png");

		return response.send(image.Body);
	} catch (err) {
		console.log(err);
		response.status(404).send("Image not found");
	}
}
