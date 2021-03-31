const app = require("../app");
const db = require("../models");
const firebase = require("../firebase");
const faker = require("faker");
const supertest = require("supertest");

jest.mock("../firebase", () => ({
  auth: jest.fn(),
}));

describe("products endpoint", () => {
  // Set the db object to a variable which can be accessed throughout the whole test file
  let thisDb = db;
  let appInstance;
  const products = [
    {
      name: "Inca Cola",
      code: "000001",
      description: "Green go!",
    },
    {
      name: "Bidú",
      code: "000002",
      description: "Guinda cola",
    },
  ];
  // Before any tests run, clear the DB and run migrations with Sequelize sync()
  beforeAll(async () => {
    await thisDb.sequelize.sync({ force: true });
    appInstance = app.initialize();
    await thisDb.Product.bulkCreate(products);
  });

  it("gets products when request has valid token", async () => {
    const authToken = faker.datatype.uuid();
    firebase.auth.mockReturnValue({
      verifyIdToken: () => Promise.resolve(true),
    });
    // App is used with supertest to simulate server request
    const response = await supertest(appInstance)
      .get("/api/products")
      .set("authorization", `Bearer ${authToken}`)
      .expect(200);

    expect(response.body).toMatchObject(products);
  });
  // After all tests have finished, close the DB connection
  afterAll(async () => {
    await thisDb.sequelize.close();
  });
});
