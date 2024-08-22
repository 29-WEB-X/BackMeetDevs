import { router } from 'express';
const authRouter = Router();
const authenticateToken = require('')
const {updateUser} = require('../controllers/usersController')

authRouter.put('/update',authenticateToken,updateUser)

module.exports = router;