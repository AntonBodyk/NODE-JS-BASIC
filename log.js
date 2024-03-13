const EventEmitter = require('events');


class Logger extends EventEmitter {
    log = (msg) => {
        console.log(msg);
        this.emit('some-event', {id: 1, text: 'Первое событие, ура!'});
    }
}


module.exports = Logger;