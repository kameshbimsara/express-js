const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controller/user-controller');
const{saveMedicine , deleteMedicine , getAllMedicine , getMedicineById , updateMedicine} = require('../controller/medicine-controller');
const authenticateToken = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login',loginUser);

router.post('/',authenticateToken, saveMedicine);
router.delete('/:id', authenticateToken, deleteMedicine);
router.get('/', authenticateToken, getAllMedicine);
router.get('/:id', authenticateToken, getMedicineById);
router.put('/:id', authenticateToken, updateMedicine);

module.exports = router;