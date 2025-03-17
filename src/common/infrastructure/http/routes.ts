import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
  return res.json({ status: 'UP' });
});

export { router };
