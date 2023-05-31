const request = require("supertest");
const app = require("../../../app");

describe("POST /v1/auth/register", () => {
  it("Register success with 201 as status code", async () => {
    const user = {
      name: "asep",
      email: "asep@gmail.co.id",
      password: "123456",
    };
    const response = await request(app).post("/v1/auth/register").send(user);
    expect(response.statusCode).toBe(201);
  });

  it("Register with 500 as status code", async () => {
    const password = "123456";
    const name = "Brian";
    const email = "brian@binar.co.id";

    return request(app)
      .post("/v1/auth/register")
      .send({ name, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(500);
      });
  });
});
