const fs = require('fs');
fs.writeFile('hello.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File created and written successfully.');
    }
});
