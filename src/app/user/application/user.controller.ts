import { Request, Response } from 'express';
import { addUser, loginUser } from '../domain/services/index';

export const addUsers = async (req: Request, res: Response) => {
  const user = await addUser(req.body);
  user ? res.status(200).json(user) : res.status(404).json({ error: 'user error' });
};

export const loginUsers = async (req: Request, res: Response) => {
  const login = await loginUser(req.body);
  login ? res.status(200).json(login) : res.status(404).json({ error: 'User not found' });
};
