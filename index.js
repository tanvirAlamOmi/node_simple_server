var cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Import the path module

const app = express();
app.use(cors());

const PORT = 3000;

let sharedText = "";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/home', (req, res) => {
    // Define the path to the APK file
    const filePath = path.join(__dirname, 'signed_pingtools-4-64-free.apk');

    // Set the headers
    res.setHeader('Content-Disposition', 'attachment; filename=signed_pingtools-4-64-free.apk');
    res.setHeader('Content-Type', 'application/vnd.android.package-archive');

    // Send the file
    res.sendFile(filePath);
});

// Other routes...

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
