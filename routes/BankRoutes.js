import express from 'express'
import { rateLimit } from 'express-rate-limit'
const router = express.Router()


const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minute
	limit: 3, // Limit each IP to 3 requests per windowMs
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

import {
  getBanks,
  getBankById,
  deleteBank
} from '../controllers/BankController.js'

/**
 * @swagger
 * /api/banks:
 *   get:
 *     summary: Get all banks
 *     responses:
 *       200:
 *         description: A list of banks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: './models/User'
 */
router.route('/').get(getBanks, limiter)
router
  .route('/:id')
  .get(getBankById, limiter)
  .delete(deleteBank)

export default router
