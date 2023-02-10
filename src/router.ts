import { Router } from 'express';
import { userMessageHandler } from './controller/messageListener';
import createProduct from './controller/createProduct';
import getProducts from './controller/getProducts';
import multer from "multer";
import path from "node:path";

export const router = Router();
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', 'uploads'));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		}
	})
});


router.post('/webhook', userMessageHandler);
router.post('/products', upload.single('image'), createProduct);
router.get('/products', getProducts);
