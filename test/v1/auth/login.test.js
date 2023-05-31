const request = require("supertest");
const app = require("../../../app");

describe("POST /v1/auth/login", () => {
  it("Login success with 201 as status code", async () => {
    const email = "jayabaya@binar.co.id";
    const password = "123456";

    return request(app)
      .post("/v1/auth/login")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
      });
  });

  it("Login failed with 404 as status code", async () => {
    const email = "mata@binar.co.id";
    const password = "kurakura";

    return request(app)
      .post("/v1/auth/login")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(404);
      });
  });
});
