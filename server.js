const express = require('express');
const app = express();
const port = 3000;

app.get('/:param', (req, res) => {
    const { param } = req.params;
    res.send(`You entered: ${param}`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});