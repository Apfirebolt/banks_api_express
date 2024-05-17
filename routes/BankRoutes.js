import express from 'express'
const router = express.Router()
import {
  getBanks,
  getBankById,
  deleteBank
} from '../controllers/BankController.js'

router.route('/').get(getBanks)
router
  .route('/:id')
  .get(getBankById)
  .delete(deleteBank)

export default router
