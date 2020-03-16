import { Router } from 'express';
import { version } from '../package.json';
import mainRouter from './api/main';
import secondRouter from './api/second';


const router = Router();

router.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'API',
    data: {
      version: `${version}`
    }
  });
});

router.use('/main', mainRouter);
router.use('/second', secondRouter);


export default router;
