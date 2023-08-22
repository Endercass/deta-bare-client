# Deta Bare Client

API Wrapper for Deta Space, implementing the [TompHTTP specifications](https://github.com/tomphttp)

## Usage

See the [Authentication Doc](https://deta.space/docs/en/basics/cli/#authentication) for more information on how to get your access token.

```js
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
```