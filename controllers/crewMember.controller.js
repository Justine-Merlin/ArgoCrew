const mongoose = require('mongoose');
const CrewMemberModel = require('../models/crewMember.model');

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