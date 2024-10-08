const {Router} = require('express');
const productsRouter = require('./productsRouter');
const usersRouter = require('./usersRouter');
const carritoRouter = require('./carritoRouter');
const pagoRouter = require('./pagoRouter');
const preferenceRouter = require('./preferenceRouter');

const router = Router();

router.use("/products", productsRouter);
router.use("/users", usersRouter);
router.use("/carrito", carritoRouter);
router.use("/pago", pagoRouter);
router.use("/create_preference", preferenceRouter)
 module.exports = router;

 