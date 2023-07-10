const router = require("express").Router();
const crewMemberController = require("../controllers/crewMember.controller");

router.get("/", crewMemberController.getMembers);
router.post("/register", crewMemberController.addMember);
router.put("/:id", crewMemberController.updateMember);
router.delete("/:id", crewMemberController.deleteMember);
module.exports = router;
