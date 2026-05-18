import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Recipes list placeholder' });
});

export default router;
