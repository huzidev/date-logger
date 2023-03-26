const fs = require('fs');
const dayjs = require('dayjs');

function main() {
    try {
        const format = "YYYY-MMM-DD hh:mmA"
        const dateFormat = dayjs().format(format);
        console.log(dateFormat);
        fs.writeFileSync('date-log.txt', formtted);
    } catch (e) {
        console.log("Error", e);
    }
}

main();