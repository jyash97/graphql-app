const uuid = require("uuid/v1");

const resolvers = {
  Query: {
    books(_, { input }, context) {
      return context.db
        .get(input || {})
        .then(res => {
          return res;
        })
        .catch(e => {
          throw e;
        });
    }
  },

  Author: {
    name(value, _, context) {
      return value;
    },
    books(value, _, context) {
      return context.db.get({ author: value });
    }
  },

  Mutation: {
    createBook(_, { input }, context) {
      return context.db
        .create(input)
        .then(res => {
          return res;
        })
        .catch(e => {
          throw e;
        });
    },

    updateBook(_, { input }, context) {
      return context.db
        .update(input)
        .then(res => {
          return res;
        })
        .catch(e => {
          throw e;
        });
    },

    deleteBook(_, { input }, context) {
      return context.db
        .remove(input)
        .then(res => {
          return res;
        })
        .catch(e => {
          throw e;
        });
    }
  }
};

module.exports = resolvers;
