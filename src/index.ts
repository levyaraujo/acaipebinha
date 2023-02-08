import express from 'express';
import { router } from './router';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Server is running on port ${port} 🚀`);
});
