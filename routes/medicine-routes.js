const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controller/user-controller');
const{saveMedicine , deleteMedicine , getAllMedicine , getMedicineById , updateMedicine} = require('../controller/medicine-controller');
const authenticateToken = require('../middleware/auth');

router.post('/register', registerUser);
router.post('/login', loginUser);

router.post('/', saveMedicine);
router.delete('/:id', deleteMedicine);
router.get('/', getAllMedicine);
router.get('/:id', getMedicineById);
router.put('/:id', updateMedicine);

module.exports = router;