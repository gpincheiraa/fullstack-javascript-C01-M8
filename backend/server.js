const App = require("./app");
const port = process.env.PORT || 3000;
const environment = JSON.stringify(process.env.NODE_ENV);

const app = App.initialize();

app.listen(port, () => {
  console.log(
    `App is running on http://localhost:${port} in environment ${environment}`
  );
});
