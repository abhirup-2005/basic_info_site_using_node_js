import express from 'express';
import path from 'node:path';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "./index.html"));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "./about.html"));
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(import.meta.dirname, "./contact-me.html"));
});

app.use((req, res, next) => {
    // Set status to 404 and send your HTML file or template
    res.status(404).sendFile(path.join(import.meta.dirname, '404.html'));
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
