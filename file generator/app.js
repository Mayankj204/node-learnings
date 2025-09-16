import readline from 'readline';
import fs from 'fs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
    rl.question('Enter the file name: ', (fileName) => {
        rl.question('Enter the file content: ', (fileContent) => {
            fs.appendFile(fileName, fileContent, (err) => {
                if (err) {
                    console.error('Error creating the file:', err);
                } else {
                    console.log('File created successfully!');
                }
                rl.close();
            });
        });
    });
};


fileCreation();