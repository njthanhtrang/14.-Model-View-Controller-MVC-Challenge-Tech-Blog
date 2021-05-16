const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening on port " + PORT));
});