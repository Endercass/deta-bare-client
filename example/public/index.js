bare
  .createBareClient(`http://${window.location.host}/bare/`)
  .then(async (client) => {
    const spaceFetch = detaBareClient.fetchFn(
      prompt("Deta Space Token"),
      client
    );
    spaceFetch("/apps")
      .then((res) => res.json())
      .then((payload) => {
        console.log(payload);
      })
      .catch((err) => {
        console.error(err);
      });
  });
