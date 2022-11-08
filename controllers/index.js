let UserControllers = require("./user.controller");

module.exports = (aplikasi) => {
    aplikasi.use("/user", UserControllers);
};