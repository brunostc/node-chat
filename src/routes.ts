import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const user = new UserController();

router.get('/', (req, res) => res.json({ msg: 'sucesso.' }));
router.post('/users', user.create);

// eslint-disable-next-line import/prefer-default-export
export { router };
