const app = require("../app");
const firebase = require("../firebase");
const faker = require("faker");
const supertest = require("supertest");

jest.mock("../firebase", () => ({
  auth: jest.fn(),
}));

describe("Auth Middleware", () => {
  let appInstance;

  beforeAll(() => {
    appInstance = app.initialize();
  });

  it("Returns 401 when authorization header is not present", async () => {
    const authToken = faker.datatype.uuid();
     // App is used with supertest to simulate server request
    const response = await supertest(appInstance)
      .get("/api/products")
      .expect(401);

    expect(response.body).toMatchObject({ message: "No token provided" });
  });

  it("Returns 401 when the authorization header is not Bearer", async () => {
    const authToken = faker.datatype.uuid();
       // App is used with supertest to simulate server request
    const response = await supertest(appInstance)
      .get("/api/products")
      .set("authorization", `FakeTypeToken ${authToken}`)
      .expect(401);

    expect(response.body).toMatchObject({ message: "Invalid token" });
  });

  it("Returns 403 when the token is invalid", async () => {
    const authToken = faker.datatype.uuid();
    firebase.auth.mockReturnValue({
      verifyIdToken: () => Promise.reject(),
    });
    // App is used with supertest to simulate server request
    const response = await supertest(appInstance)
      .get("/api/products")
      .set("authorization", `Bearer ${authToken}`)
      .expect(403);

    expect(response.body).toMatchObject({ message: "Could not authorize" });
  });
});
