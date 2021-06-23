const fs = require("fs"); // fs - shorthand from file system

const path = require('path');




fs.readdir(path.join(__dirname, "files"), function(err, files) {

    if(err) {
        console.log(`Wystąpił błąd: ${err.message}.`);
        throw err;
    }

    files.forEach(function(filename) {

        fs.stat(path.join(__dirname, "files", filename), function(err, stats) {

            if(err) {
                console.log(`Wystąpił błąd: ${err.message}.`);
                throw err;
            }

            console.log(`Informacje o pliku ${filename}:`);
            console.log(`Data utworzenia: ${stats.birthtime.getFullYear()}\n`);

        });

    });

});

console.log("To wykona się przed wyświetleniem zawartości katalogu.");


