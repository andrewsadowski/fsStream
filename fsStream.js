var fs = require('fs');

var readableStream = fs.createReadStream('CS_CZ_iOS.txt');
var writableStream = fs.createWriteStream('output.txt');

var search = '/****************** Version - 2.0.0 **********************/';

var body = fs.readFileSync('CS_CZ_iOS.txt').toString();

var afterSearch = body.substr(body.indexOf(search));

fs.writeFile('output.txt', afterSearch, (err) => {
    if(err) {
        return console.log(err);
    }
    console.log('The file was saved');
});

console.log(afterSearch);

if (body.indexOf(search) > 0) {
    console.log('FOUND');
} else {
    console.log('not found');
}

