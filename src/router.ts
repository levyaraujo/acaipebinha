import { Router } from 'express';
import { userMessageHandler } from './bot/messageListener';
import createProduct from './controller/createProduct';
import createUser from './controller/createUser';
import getProducts from './controller/getProducts';
import multer from "multer";
import path from "node:path";
import cors from "cors";

//options for cors midddleware
const options: cors.CorsOptions = {
	allowedHeaders: [
		'Origin',
		'X-Requested-With',
		'Content-Type',
		'Accept',
		'X-Access-Token',
	],
	credentials: true,
	methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
	origin: ["http://localhost:5173", "https://8af4-45-7-26-90.sa.ngrok.io"],
	preflightContinue: false,
};

export const router = Router();
router.use(cors(options));
const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, path.resolve(__dirname, '..', '/media'));
		},
		filename(req, file, callback) {
			callback(null, `${Date.now()}-${file.originalname}`);
		}
	})
});


router.post('/webhook', userMessageHandler);
router.post('/products', upload.single('image'), createProduct);
router.get('/products', getProducts);
router.post('/users', createUser);

router.options('*', cors(options));
