var fs = require("fs");

fs.writeFile('welcome.txt', 'Hello node', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
fs.readFile('welcome.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("The content is : " + data.toString());
});

