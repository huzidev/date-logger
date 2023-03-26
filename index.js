const fs = require('fs');
const dayjs = require('dayjs');

function main() {
    try {
        console.log('function main');
        const date = new Date();
        const format = "YYYY-MM-DD mm:ss"
        const formtted = dayjs().format(format);
        console.log(formtted);
        fs.writeFileSync('date-log.txt', formtted);
    } catch (e) {

    }
}

main();