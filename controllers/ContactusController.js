const Contactus = require("../models/ContactusModel");

const getAllContact = async(req, res, next)=>{

    let contact;
    //get contact
    try{
        contact= await Contactus.find();
        res.status(200).json(contact);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
    //not found
    if(!contact){
        return res.status(404).json({messahe:"Contact not found"});
    }
    //Display contacts
    return res.ststus(200).json({contact});
};

//data Insert
const addContact = async(req, res, next)=>{
    const {name, email,Contact,address,servicetype,message}= req.body;

    let contact;
    try{
        contact= new Contactus ({name, email,Contact,address,servicetype,message});
        await contact.save();
    }catch(error){
        return res.status(400).json({error: error.message});
    }
    // not insert contact
    if(!contact){
        return res.status(404).send({message:"Unable to Contact"});
    }
    return res.status(200).json({contact});

};

// get by id
const getById = async(req, res, next)=>{
    const id= req.params.id;

    let contact;

    try{
        contact = await Contactus.findById(id);
    }catch(error){
        res.status(500).json({ error: error.message});
    }
    // not available contact
    if(!contact){
        return res.status(404).send({message:"Contact not Found"});
    }
    return res.status(200).json({contact});

};

// update contactus details
const updateContact= async(req, res, next)=>{
    const id= req.params.id;
    const {name, email,Contact,address,servicetype,message}= req.body;

    let contact;

    try{
        contact= await Contactus.findByIdAndUpdate(id,
            {name:name, email:email,Contact:Contact,address:address,servicetype:servicetype,message:message});
            contact = await contact.save();
    }catch(error){
        res.status(500).json({error: error.message});
    }

    if(!contact){
        return res.status(404).send({message:"Unable to update details"});
    }
    return res.status(200).json({contact});


};
//delete contact details
const deleteContact= async(req, res, next)=>{
    const id= req.params.id;

    let contact;
    try{
        contact= await Contactus.findByIdAndDelete(id);

    }catch(error){
        res.status(500).json({error: error.message});
    }
    if(!contact){
        return res.status(404).send({message:"Unable to Delete"});
    }
    return res.status(200).json({contact});


};


exports.getAllContact= getAllContact;
exports.addContact=addContact;
exports.getById=getById;
exports.updateContact=updateContact;
exports.deleteContact=deleteContact;