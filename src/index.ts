import express from 'express';
import { router } from './router';
import mongoose from 'mongoose';
import path from "node:path";

mongoose.set('strictQuery', false);
mongoose.connect("mongodb://db:27017/acaipebinha")
	.then(() => {
		const app = express();
		app.use(express.json());
		app.use(express.urlencoded({ extended: false }));
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(router);
		const port: number = Number(process.env.PORT) || 8000;

		app.listen(port, () => {
			console.log(`Server is running on http://localhost:${port} 🚀`);
		});
	})
	.catch(error => {
		console.log(`Error on connecting to database: ${error}`);
	});
