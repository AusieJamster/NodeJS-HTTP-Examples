const axios = require("axios").default;
const fs = require("fs");

axios({
  method: "post",
  url: "http://localhost:8080/users",
  data: {
    userName: "AusieJamster",
  },
  transformRequest: (data, headers) => {
    const newData = {
      userName: data.userName + "!",
    };
    console.log("creating... " + newData.userName);
    return JSON.stringify(newData);
  },
})
  .then((response) => {
    response.data.pipe(fs.createWriteStream("google.html"));
  })
  .catch((err) => {
    console.log(err);
  });

// these are examples obviously you wouldn't make a function for a single line let alone duplicate it.
const getMetadata = () => {
  return axios.get("http://localhost:8080/metadata?id=1");
};

const getMetadataAgain = () => {
  return axios.get("http://localhost:8080/metadata?id=1");
};

axios.all([getMetadata(), getMetadataAgain()]).then((responseArray) => {
  console.log(responseArray[0].data.description);
  console.log(responseArray[1].data.description);
});
