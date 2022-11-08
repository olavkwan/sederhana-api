const express = require("express");
const aplikasi = express();
// untuk memanggil folder controllers
const controllers = require("./controllers");
controllers(aplikasi);

let object =  [
    {
        name : "olavkwan",
        umur : 31,
    },
    {
        name : "kwanolav",
        umur : 28,
    },
];
    // [] => Data Object
    // [] => Data Array
aplikasi.get("/", function(request, response){
    response.json({ pesan : "Data berhasil di ambil", rizka : object });
})
// ini komentar saya
aplikasi.listen(3002);