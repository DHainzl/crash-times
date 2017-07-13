const fs = require('fs');

const path = process.cwd();

fs.writeFile(path + '/docs/CNAME', 'crash-times.dhainzl.at', 'utf-8', function(err) {
    if (err) {
        return console.error('Could not create CNAME file: ', err);
    }
    console.log('Created CNAME file');
});
