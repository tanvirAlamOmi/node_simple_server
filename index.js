var cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const PORT = 3000;

let sharedText = "";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/static/home.html');
});

app.get('/getText', (req, res) => {
    res.json({ text: sharedText });
});

app.post('/setText', (req, res) => {
    sharedText = req.body.text;
    res.json({ status: "Text updated!" });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/home.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});