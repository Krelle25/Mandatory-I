import express from 'express';

import path from 'path';

const app = express();
app.use(express.static('public', {
    extensions: ['html']
}));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontend/frontend.html'))
});

app.get('/dayOne.html', (req, res) => {
    res.sendFile(path.resolve('public/documentation/dayOne.html'));
});

app.get('/dayTwo.html', (req, res) => {
    res.sendFile(path.resolve('public/documentation/dayOne.html'));
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Could not start the server on: " + PORT);
    }
    console.log("Server is running on port: " + server.address().port);
});