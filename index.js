const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let sampleData = {
    message: "Hello, World!"
};

app.get('/getData', (req, res) => {
    res.json(sampleData);
});

app.post('/postData', (req, res) => {
    sampleData = req.body;
    res.json({
        message: "Data received successfully",
        newData: sampleData
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
