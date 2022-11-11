let UserControllers = require("./user.controller");
let KategoriControllers = require('./kategori.controller');
module.exports = (aplikasi) => {
    aplikasi.use("/user", UserControllers);
    aplikasi.use("/kategori", KategoriControllers);
};