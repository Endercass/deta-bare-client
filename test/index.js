const { fetchFn } = require("../dist/index.js");

const spaceFetch = fetchFn(process.env.DETA_SPACE_TOKEN);
spaceFetch("/apps")
  .then((res) => res.json())
  .then((payload) => {
    console.log(payload);
  })
  .catch((err) => {
    console.error(err);
  });
