const router = require('express').Router();
const cartController = require('../Contollers/cartController');
const verifyToken = require('../middleware/auth');

// Protect the entire router
router.use(verifyToken);

router.post('/add', cartController.addToCart);
router.get('/', cartController.getCart);
router.delete('/remove/:productId', cartController.removeFromCart);

module.exports = router;
