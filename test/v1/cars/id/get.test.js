const request = require("supertest");
const app = require("../../../../app");

describe("GET /v1/cars/:id", () => {
  let carId = 1;

  it("should response with 201 as status code", async () => {
    const response = await request(app).get(`/v1/cars/${carId}`);
    expect(response.statusCode).toBe(200);
  });
});
