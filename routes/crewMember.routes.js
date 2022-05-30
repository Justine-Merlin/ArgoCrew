const router = require('express').Router();
const crewMemberController = require('../controllers/crewMember.controller');

router.post('/register', crewMemberController.addMember);

module.exports = router;