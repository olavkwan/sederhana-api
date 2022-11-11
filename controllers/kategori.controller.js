const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.json({ pesan : "ini halaman kategori gaeess"})
    
})

module.exports = router;