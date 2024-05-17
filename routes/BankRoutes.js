import express from 'express'
const router = express.Router()
import {
  getBanks,
  getBankById,
} from '../controllers/BankController.js'

router.route('/').get(getBanks)
router
  .route('/:id')
  .get(getBankById)

export default router
