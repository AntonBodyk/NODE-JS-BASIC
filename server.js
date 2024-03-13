//СОЗДАНИЕ ФУНКЦИОНАЛА СЕРВА С ПОМОЩЬЮ EXPRESS


const express = require('express');
const path = require('path');


const app = express();

app.set('view engine', 'ejs'); // установка ejs
const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`); //для кроссплатформенной работы сервера
const PORT = 3000;


app.listen(PORT, (error) => {       //для прослушивания сообщ серва
    error ? console.log(error) : console.log('listen port 3000');
});

app.use(express.static('styles')); // короче разрешаем браузеру читать стили, так изначально нельзя

app.get('/', (req, res) => {
    const title = 'Home Page';
    res.render(createPath('index'), {title});
});

app.get('/contacts', (req, res) => {
    const title = 'Contacts Page';
    const contacts = [
        { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
        { name: 'Twitter', link: 'http://github.com/YauhenKavalchuk' },
        { name: 'GitHub', link: 'http://twitter.com/YauhenKavalchuk' },
    ];
    res.render(createPath('contacts'), {contacts, title});
});

app.get('/posts/:id', (req, res) => {
    const title = 'Post Page';
    res.render(createPath('post'), {title});
});

app.get('/posts', (req, res) => {
    const title = 'Posts Page';
    res.render(createPath('posts'), {title});
});

app.get('/new-post', (req, res) => {
    const title = 'New-post Page';
    res.render(createPath('new-post'), {title});
});

app.get('/about-us', (req, res) => {
    res.redirect('/contacts');
});

app.use((req, res) => {    //для отлова ошибок стр 404
    const title = 'Error Page';
    res
        .status(404)
        .render(createPath('errors'), {title});
});
