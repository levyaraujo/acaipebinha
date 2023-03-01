import express from 'express';
import { router } from './router';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
mongoose.set('strictQuery', false);
mongoose.connect(String(uri))
	.then(() => {
		const app = express();
		const staticPath = String(process.env.IMAGES_PATH);
		app.use('/images', express.static(staticPath));
		app.use(express.json());
		app.use(express.urlencoded({ extended: false }));
		app.use(router);
		const port: number = Number(process.env.PORT) || 8000;

		app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port} 🚀`);
		});
	})
	.catch(error => {
		console.log(`Error on connecting to database: ${error}`);
	});
