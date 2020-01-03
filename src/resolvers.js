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
  }
};

module.exports = resolvers;
