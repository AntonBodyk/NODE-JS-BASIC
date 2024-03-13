const Logger = require('./log');

const logger = new Logger();


logger.on('some-event', (args) => {   //отслеживаем событие
    console.log(args.id, args.text);
});

// emitter.emit('some-event', {id: 1, text: 'Первое событие, ура!'}); // вызываем событие и указываем нужное содержмое данных
logger.log('User logged!');