const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    console.log(name, email, message);

    res.send("Form Submitted Successfully");
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});