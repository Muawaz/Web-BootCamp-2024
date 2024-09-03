
const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function printFizzBuzz(min_limit, max_limit) {
    let array = []

    for (let index = min_limit; index <= max_limit; index++) {
        if (index % 3 == 0)
            array.push('FIZZ')
        else if (index % 5 == 0)
            array.push('BUZZ')
        else
            array.push(index)
    }

    console.log(array)
}



rl.question('Enter the minimum limit : ', function(x) {
    rl.question('Enter the maximum limit : ', function(y) {

        let min_limit = 1
        let max_limit = 100;

        let int_x = parseInt(x)
        if (!isNaN(int_x)) min_limit = int_x

        let int_y = parseInt(y)
        if(!isNaN(int_y)) max_limit = int_y

        printFizzBuzz(min_limit, max_limit)

        console.log('min = ', min_limit);
        console.log('max = ', max_limit);``

        rl.close();
    })
});


