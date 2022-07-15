const express = require("express")

const app = express()

const PORT = process.env.PORT || 8080

app.set("views", "./views")
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')) //Bootstrap

//Data Base:
const productos = []

app.get("/", (req, res) => {
    res.render("ejs/index", {productos})
})

app.post("/productos", (req, res) => {
    productos.push(req.body)
    console.log(req.body, "product added");

    res.render("ejs/productos", {productos})
})


const server = app.listen(PORT, () => {
    console.log(`Server listening [${PORT}]...`);
})
server.on('error', e => console.log(`Error on server.`, e))