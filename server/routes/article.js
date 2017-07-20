const Article = require('../controllers/Articles');
const verify = require('../helpers/token');
const router = require('express').Router();

router.get('/', Article.get);
router.get('/:id', Article.getOne);
router.get('/category', Article.getByCategory);
router.get('/author/:id', Article.getByAuthor);
router.post('/', verify.userlogin, Article.create);
router.put('/:id', verify.userlogin, Article.signin);
router.delete('/:id', verify.userlogin, Article.remove);

module.exports = router