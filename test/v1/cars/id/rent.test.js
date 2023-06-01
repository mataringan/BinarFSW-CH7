const request = require("supertest");
const app = require("../../../../app");
const { Car } = require("../../../../app/models");

describe("POST /v1/cars/:id/rent", () => {
  let token;

  const user = {
    email: "jayabaya@binar.co.id",
    password: "123456",
  };

  const rentTime = {
    rentStart: "2023-05-30T13:36:40.143Z",
    rentEnd: "2023-05-30T13:36:40.143Z",
  };

  beforeAll(async () => {
    const response = await request(app).post("/v1/auth/login").send(user);
    token = response.body.accessToken;
  });

  it("Success - status code 201 ", async () => {
    const response = await request(app)
      .post("/v1/cars/1/rent")
      .set("Authorization", `Bearer ${token}`)
      .send(rentTime);
    expect(response.statusCode).toBe(201);
  });
});
