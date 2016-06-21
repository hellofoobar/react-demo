import express from 'express';

const app = express();

// app.use('/', express.static('app'));

app.use('/public', express.static(__dirname + '../public'));

// app.use('/app', express.static('public'));

// app.use(express.static(path.join(__dirname, 'app')));

// app.use('/app', express.static(__dirname + '/app'));

// app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000);