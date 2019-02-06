const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

}

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, function () {
    console.log(`🌎  ==> App is now listening on port : http://localhost:${PORT}`)
});