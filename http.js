const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {                //запуск сервера
    console.log('Server request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'application/json');   // вспомогательный метод для записи данных ответа (тип данных)
    //
    // res.write('<link rel="stylesheet" href="#">');
    // res.write('<h1>Hello Node JS users</h1>');
    // res.write('<p>My name Mark</p>');

    const data = JSON.stringify([
        {id:1, name: 'Tom', age: 20},
        {id:2, name: 'Brad', age: 40},
        {id:3, name: 'Danil', age: 30},
    ])
    res.end(data)
});

server.listen(PORT, 'localhost' , (error) => {       //для прослушивания сообщ серва
    error ? console.log(error) : console.log('listen port 3000');
})
