const mongoose = require('mongoose');
const CrewMemberModel = require('../models/crewMember.model');

module.exports.getMembers = async (req, res) => {
    const members = await CrewMemberModel.find();
    res.status(200).json(members);
}

module.exports.addMember = async(req, res) => {
    const { name, qualifiers } = req.body;
    try {
            const member = await CrewMemberModel.create({ name, qualifiers });         
            res.status(201).json({member})
        } 
        catch(err) {
            res.status(200).send({err});
        }
}

module.exports.updateMember = async (req, res) => {
    // Checking if users exists
    if (!mongoose.isValidObjectId(req.params.id))
        res.status(400).send("Unknown Member's ID : " + req.params.id)
    
    const member = await CrewMemberModel.findById(req.params.id);
    member.name = req.body.name;
    if(req.body.qualifiers) {
        member.qualifiers = req.body.qualifiers;
    }
    
    try {
        await member.save();
        res.status(200).json(member)
    } catch(err) {
        res.status(500).json({err})
    }
}