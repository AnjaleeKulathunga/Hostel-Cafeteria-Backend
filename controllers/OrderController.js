const Order = require("../models/OrderModel");

const createOrder = async(req, res) => {

    const {StudentID,Name,Contact,items,totalPrice,specialInstructions,orderDate}= req.body;
    let order;

    try{
        const order = new Order({StudentID,Name,Contact,items,totalPrice,specialInstructions,orderDate});
        await order.save();
        return res.status(201).json({message: 'Order Placed Successfully',order});
    }catch(error){
        return res.status(400).json({error: error.message});
    }
    //not insert order
    if(!order){
        return res.status(404).send({message:"Unable to add Orders"});
    }
    return res.status(200).json({order});

};

const getAllorders = async(req, res) => {

    let orders; 
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};
//get by ID
const getOrderById = async(req, res) =>{

    const id= req.params.id;
    let order;
    try{
        const order= await Order.findById(req.params.id);
        if(!order) return res.status(404).json({ message:'Order Not Found'});
        res.status(200).json(order);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

//update order
//const updateOrderStatus = async (req, res)=> {
   // try{
        //const{status}= req.body;
        //const order = await Order.findByIdAndUpdate(req.params.id,{ status: status}, { new:true});
        //if(!order) return res.status(404).json({message:'Order Not Found'});
        //res.status(200).json({message: 'Order status updated',order});
   // }catch(error){
    //    res.status(500).json({error: error.message});
   // }
//};

const updateOrder = async (req, res)=> {
    const id= req.params.id;
    const {StudentID,Name,Contact,items,totalPrice,specialInstructions,orderDate}= req.body;
     let order;

     try{
        order= await Order. findByIdAndUpdate(id,{
            StudentID: StudentID,Name:Name,Contact: Contact,
            items: items,totalPrice: totalPrice,specialInstructions: specialInstructions,orderDate: orderDate
        });
        order= await order.save();
     }catch(error){
            res.status(500).json({error: error.message});
     }
     if(!order){
        return res.status(404).send({message:"Unable to Update Orders"});
    }
    return res.status(200).json({order});
};

//delete order
const deleteOrder = async(req, res) => {
    const id= req.params.id;
    let order;
    try{
        const order = await Order.findByIdAndDelete(req.params.id);
        if(!order) return res.status(404).json({message:'Order not Found'});
        res.status(200).json({message:'Order deleted Successfully'});
    }catch(error){
        res.status(500).json({ error: error.message});
    }
};

exports.createOrder=createOrder;
exports.getAllorders= getAllorders;
exports.getOrderById= getOrderById;
exports.updateOrder= updateOrder;
exports.deleteOrder=deleteOrder;