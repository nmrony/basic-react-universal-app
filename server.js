
import express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
    res.render('index');
});

var server = app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});

