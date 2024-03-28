const express = require('express');
const router = express.Router();
const Model = require('../models/models');

// Define your routes
router.get('/', async (req,res)=>{
    try {
        
    res.json({name:'asdf'})
    } catch (error) {
        console.log(error);
    }
});
//Post Method 

router.post('/post', async (req, res) => {
    const data = new Model({
        title: req.body.title,
        description: req.body.description,
        status:req.body.status
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
router.get('/getOne/:id', async(req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async(req, res) => {
    try{
        const id=req.params.id;
        const updateData=req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updateData, options
        )

        res.send(result)
    }
    catch(error){
        res.status(500,json({message:error.message}))
    }

   
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;