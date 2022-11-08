const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.json({ pesan : "ini saya mas rosyid otw jakarta"})
    
})

module.exports = router;