const router = require('express').Router();
const insertController = require('../controllers/insertController');

router.post('/post', insertController.AddData);

router.get('/get', insertController.GetData);

router.get('/getById/:id', insertController.GetDataById);

router.put('/update/:id', insertController.Update);

router.delete('/delete/:id', insertController.DeleteData);

module.exports = router;