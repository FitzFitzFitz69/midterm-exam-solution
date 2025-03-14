const express = require('express');
const app = express();
const port = 3000;

app.get('/question3', (req, res) => {
    res.json({ message: 'Express is working! Arnold A. Cutad Jr' });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});