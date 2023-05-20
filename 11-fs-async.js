const { readFile, writeFile } = require('fs');
console.log('starting');
readFile('./content/first.txt', 'utf8', (error, result) => {
    if (error) {
        console.log(error);
        return;
    }
    //console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if (error) {
            console.log(error);
            return;
        }
    });
    const second = result;
    writeFile('./content/result-async.txt', `Here is the result : ${first},${second}`, { flag: 'a' },
        (error, result) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log('Done with this task');
        });
    //console.log(result);
});
console.log('Starting the next task');