// import the app
const app = require("./app")

const port = 3000;

//start the server
app.listen(port, () => {
    console.log(`Started listening on port ${port}`)
})
