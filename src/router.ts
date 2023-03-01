import { Router } from 'express';
import { userMessageHandler } from './bot/messageListener';
import createProduct from './controller/createProduct';
import createUser from './controller/createUser';
import getProducts from './controller/getProducts';
import cors from "cors";
import { serveImage } from './middlewares/serveImages';
import { validateWhatsAppKey } from './controller/validateWhatsAppKey';


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
	origin: "http://localhost:5173",
	preflightContinue: false,
};

export const router = Router();
router.use(cors(options));



router.post('/webhook', userMessageHandler);
router.get('/webhook', validateWhatsAppKey);
router.post('/products', createProduct);
router.get('/products', getProducts);
router.post('/users', createUser);
router.get('/static/:imageName', serveImage);

router.options('*', cors(options));
