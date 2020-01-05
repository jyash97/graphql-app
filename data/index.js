const fs = require("fs");
const uuid = require("uuid/v1");

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

const create = ({ title, author }) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/index.json", "utf-8", (err, response) => {
      if (err) reject(err);
      let parsedJSON = JSON.parse(response);
      const newBook = {
        title,
        author,
        id: uuid(title)
      };
      fs.writeFile(
        "./data/index.json",
        JSON.stringify([...parsedJSON, newBook], null, 2),
        err => {
          if (err) reject(err);
        }
      );
      resolve(newBook);
    });
  });
};

const update = ({ id, title, author }) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/index.json", "utf-8", (err, response) => {
      if (err) reject(err);
      let parsedJSON = JSON.parse(response);
      const updatedData = parsedJSON.map(item => {
        if (item.id === id) {
          return {
            title: title || item.title,
            author: author || item.author,
            id
          };
        }
        return item;
      });
      fs.writeFile(
        "./data/index.json",
        JSON.stringify(updatedData, null, 2),
        err => {
          if (err) reject(err);
        }
      );
      resolve(updatedData.find(book => book.id === id));
    });
  });
};

const remove = ({ id }) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data/index.json", "utf-8", (err, response) => {
      if (err) reject(err);
      let parsedJSON = JSON.parse(response);
      const updatedData = parsedJSON.filter(item => item.id !== id);
      fs.writeFile(
        "./data/index.json",
        JSON.stringify(updatedData, null, 2),
        err => {
          if (err) reject(err);
        }
      );
      resolve(id);
    });
  });
};

module.exports = {
  get,
  create,
  update,
  remove
};
