import rateLimit from 'express-rate-limit';

export const rateLimiter = rateLimit({
	windowMs: 2000,
	max: 1,
	message: 'You have exceeded the 100 requests in 24 hrs limit!',
	standardHeaders: true,
	legacyHeaders: false,
});
