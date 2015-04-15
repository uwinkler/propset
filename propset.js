#!/usr/bin/env node
/**
 * Created by uw on 14/04/15.
 */

var program = require('commander');
var fs = require('fs');


program
    .version('0.0.1')
    .option('-p, --property [property]', 'Set the specified property ')
    .option('-v, --value [property value ]', 'Set the specified property value')
    .option('-f, --file [file]', 'Set the JSON file to read')
    .parse(process.argv);


if (!program.property || !program.value) {
    console.error("Program args are not correct. See --help");
    process.exit(1);
}

if (program.file) {
    fs.readFile(program.file, function (err, content) {

        if (err) {
            console.error('Error opening file ' + program.file + ': ' + err);
            alterJson({});
        } else {
            alterJson(JSON.parse(content));
        }

    });
} else {
    alterJson({});
}

function alterJson(obj) {
    obj[program.property] = program.value;
    console.log(JSON.stringify(obj, null, 2));
}




