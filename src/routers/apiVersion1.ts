import { Router } from 'express';
import { WithdrawalController } from '../v1/controllers/WithdrawalController';
import { WithdrawalValidation } from '../v1/middleware/WithdrawalValidation';

const api = Router();

api.post('/withdrawal', WithdrawalValidation, WithdrawalController );

export default api;
