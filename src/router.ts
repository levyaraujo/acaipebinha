import { Router } from 'express';
import { userMessageHandler } from './controller/messageListener';

export const router = Router();
router.post('/webhook', userMessageHandler);
