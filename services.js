const fetchImageMetadata = (id) => {
  return {
    id: id,
    title: "Example Title",
    description: "This is a made up description",
    creator: "Jamie Brearley",
    date: new Date(),
  };
};

const createUser = (userName) => {
  console.log("fake saving..");
  console.log(`user "${userName}" created`);
};

exports.fetchImageMetadata = fetchImageMetadata;
exports.createUser = createUser;
