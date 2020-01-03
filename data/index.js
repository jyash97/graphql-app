const fs = require("fs");

const get = ({ title, author }) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/index.json", "utf-8", (err, response) => {
      if (err) reject(err);
      let parsedJSON = JSON.parse(response);
      if (title) {
        parsedJSON = parsedJSON.filter(book =>
          book.title.toLowerCase().startsWith(title.toLowerCase())
        );
      }
      if (author) {
        parsedJSON = parsedJSON.filter(book =>
          book.author.toLowerCase().startsWith(author.toLowerCase())
        );
      }
      resolve(parsedJSON);
    });
  });
};

module.exports = {
  get
};
