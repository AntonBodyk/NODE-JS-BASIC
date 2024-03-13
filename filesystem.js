const fs = require('fs');

fs.readFile('./text.txt', 'utf-8', (error, data) => {
    // console.log(data.toString()); //приходит хуй зна шо, вместо строк файла, что бы приходили норм строки нужно добавить toString
    console.log(data); //либо добавить кодировку 2 аргументом

    fs.mkdir('./files', () => {
        fs.writeFile('./files/text1.txt', `${data} Просто торба!`, () => {

        })
    })
})
//Удаление файлов и папок

setTimeout(() => {
    if(fs.existsSync('./files/text1.txt')){
        fs.unlink('./files/text1.txt', () => {});
    }
}, 4000)

setTimeout(() => {
    if(fs.existsSync('./files')){
        fs.rmdir('./files', () => {});
    }
}, 4000)