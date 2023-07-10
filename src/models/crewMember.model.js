const mongoose = require('mongoose');

const crewMemberSchema = new mongoose.Schema(
    {
        name : {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        qualifiers : [String]
    },
    {
        timestamps: true
    }
)

// check qualifiers number to not exceed 3
crewMemberSchema.path('qualifiers').validate(function (value) {
    if (value.length > 3) {
      throw new Error("Can't assign more than 3 qualifiers");
    }
});
  
  
const CrewMemberModel = mongoose.model('member', crewMemberSchema);
module.exports = CrewMemberModel;