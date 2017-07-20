const User = require('../controllers/users');
const verify = require('../helpers/token');
const router = require('express').Router();

router.get('/', User.getAll);
router.get('/:id', User.getOneData);
router.post('/signup', User.signup);
router.post('/signin', User.signin);

module.exports = router