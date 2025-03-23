const express= require("express");
const router = express.Router();

//Insert Model
const Order = require("../models/OrderModel");
//Insert OrderController
const OrderController =require("../controllers/OrderController");

router.post('/',OrderController.createOrder);
router.get('/', OrderController.getAllorders);
router.get('/:id', OrderController.getOrderById);
router.put('/:id', OrderController.updateOrder);
router.delete('/:id',OrderController.deleteOrder);

//export
module.exports= router;
