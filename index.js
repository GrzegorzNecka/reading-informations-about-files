const fs = require("fs"); // fs - shorthand from file system

const path = require('path');


//exists asynchronic method  method checked that a file is exist 

// the exists argument will be return boolean

fs.exists(path.join(__dirname, 'files', 'lorem1.txt'), function(exists) {

      if(exists) {
        console.log('plik istnieje')
      }else{
        console.log('plik nie istnieje')
      }

}); 

 console.log("To wykona się przed wyświetleniem czy plik istnieje.");