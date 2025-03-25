const fs = require('fs');
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

const readStream = fs.createReadStream('input.txt');
const writeStream = fs.createWriteStream('output.txt');

readStream.pipe(upperCaseTransform).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('File transformation complete. Check output.txt');
});
