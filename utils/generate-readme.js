const fs = require('fs');

const writeFile = mainContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', mainContent, err => {
            if (err) {
                reject(err);
                return;
            }
        resolve({
            ok: true,
            message: 'Readme.md Created!',
        })
        })
    }
,}

module.exports = { writeFile };