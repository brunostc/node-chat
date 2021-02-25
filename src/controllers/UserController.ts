import { Request, Response } from 'express';
import { UserSchema } from '../models/User';
import mongoose from 'mongoose';
import * as Yup from 'yup';

const User = mongoose.model('User', UserSchema);

class UserController {
	async create(req: Request, res: Response) {
		const { name, email, password } = req.body;

		const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

		if (! (await schema.isValid(req.body))) 
			return res.status(400).json({ error: 'Validation error. ERRNO: 1000' });

		const usuario = new User(req.body);
		
		await usuario.save();

		return res.json(usuario);
	}
}

export { UserController };
