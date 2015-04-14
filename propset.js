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


if (!program.property || !program.file) {
    console.error("Program args are not correct. See --help");
    process.exit(1);
}

fs.readFile(program.file, function (err, content) {

    if (err) {
        console.error('Error reading file ' + program.file + ':' + err);
        process.exit(1);
    }
    var parsedJSON = JSON.parse(content);
    parsedJSON[program.property] = program.value;
    console.log(JSON.stringify(parsedJSON, null, 2));

});




