
const insert = require('../models/Insert');

module.exports = {
    AddData : async(req, res) => {
        const newData = new insert({
            title: req.body.title,
            body: req.body.body,
        });
        if (newData) {
            await newData.save();
            res.status(200).json({"message": "insert seccess"})
        } else {
            res.status(401).json({"message": "Error"})
        }
    },
    GetData : async(req, res) => {
        try {
            const data = await insert.find();
            res.status(200).json(data);
        } catch (error) {
            res.status(401).json({"message": "error"})
        }
    },
    GetDataById : async(req, res) => {
        const id = req.params.id
        try {
            const data = await insert.findById(id);
            res.status(200).json(data);
        } catch (error) {
            res.status(401).json({"message": "error"})
        }
    },
    Update : async(req, res) => {
       const  id = req.params.id
       try {
        const updateData = await insert.findByIdAndUpdate({_id:id, body: 'Body one'},{$set: {body: "Body Updated", }});
        if (updateData) {
            res.status(200).json({'message': 'Updated Succussfully'})
        } else {
            res.status(401).json({"Message": "Error 401"})
        }
       } catch (error) {
        res.status(400).json({'message': 'Error '})
       }
    },
    DeleteData : async(req, res) => {
        const id = req.params.id
    try {
        const DeleteData = await insert.findByIdAndDelete({_id:id});
        res.status(200).json({'message': 'Deleted successfully'});
    } catch (error) {
        res.status(401).json({'message': 'Can not delete'})
     }
    }
}