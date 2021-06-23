const fs = require("fs"); // fs - shorthand from file system

const path = require('path');




fs.stat(path.join(__dirname, "files", "lorem1.txt"), function(err, stats) {

    if(err) {
        console.log(`Wystąpił błąd: ${err.message}.`);
        throw err;
    }

    console.log(`Data utworzenia: ${stats.birthtime}`);
    console.log(`Data ostatniej modyfikacji: ${stats.mtime}`);
    console.log(`isFile: ${stats.isFile()}`);
    console.log(`isDirectory: ${stats.isDirectory()}`);

});

 console.log("To wykona się przed wyświetleniem czy plik istnieje.");