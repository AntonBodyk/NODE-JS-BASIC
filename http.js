const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;


const server = http.createServer((req, res) => {                //запуск сервера
    console.log('Server request');
    console.log(req.url, req.method);

    const createPath = (page) => path.resolve(__dirname, 'pages', `${page}.html`); //для кроссплатформенной работы сервера
    let basePath = '';

    res.setHeader('Content-Type', 'text/html');   // вспомогательный метод для записи данных ответа (тип данных)

    switch (req.url){
        case '/':
            basePath = createPath('index');
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/contacts');
            res.end();
            break;
        case '/contacts':
            basePath = createPath('contacts');
            res.statusCode = 200;
            break;
        default:
            basePath = createPath('errors');
            res.statusCode = 404;
            break;
    }

    fs.readFile(basePath, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })

});


server.listen(PORT, 'localhost' , (error) => {       //для прослушивания сообщ серва
    error ? console.log(error) : console.log('listen port 3000');
})
