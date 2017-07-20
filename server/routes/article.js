const Article = require('../controllers/articles');
const verify = require('../helpers/token');
const router = require('express').Router();

router.get('/', Article.get);
router.get('/:id', Article.getOne);
router.get('/category', Article.getByCategory);
router.get('/author/:id', Article.getByAuthor);
router.post('/', verify.Userlogin, Article.create);
router.put('/:id', verify.Userlogin, Article.update);
router.delete('/:id', verify.Userlogin, Article.remove);

module.exports = router