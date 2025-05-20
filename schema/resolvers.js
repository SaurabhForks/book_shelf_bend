const { userList, movieList } = require("../data/dummyData");
const lodash = require("lodash");

const resolvers = {
  Query: {
    users() {
      return userList;
    },
    user: (_, args) => {
      const user = userList.find((user) => user.id === args.id);
      return user;
    },
    movies() {
      return movieList;
    },
    movie: (_, args) => {
      const movie = lodash.find(movieList, { name: args.name });
      // const movie = movieList.find((movie) => movie.name === args.name);
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return lodash.filter(movieList, { isInTheaters: true });
    },
  },

  Mutation: {
    createUser: (_, args) => {
      const user = args.input;
      const lastId = userList[userList.length - 1].id;
      user.id = parseInt(lastId) + 1;
      userList.push(user);
      return user;
    },
    updateUser: (_, args) => {
      const { id, userName, email, age, name, nationality } = args.input;
      const user = userList.find((user) => user.id === id);
      if (userName) {
        user.userName = userName;
      }
      if (email) {
        user.email = email;
      }
      if (age) {
        user.age = age;
      }
      if (name) {
        user.name = name;
      }
      if (nationality) {
        user.nationality = nationality;
      }
      return user;
    },
    deleteUser: (_, args) => {
      const { id } = args.id;
      const user = userList.find((user) => user.id === id);
      userList.splice(userList.indexOf(user), 1);
      return user;
    },
  },
};

module.exports = { resolvers };
