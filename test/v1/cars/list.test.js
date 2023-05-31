const request = require("supertest");
const app = require("../../../app");

describe("GET /v1/cars", () => {
  it("should response with 200 as status code", async () => {
    const response = await request(app).get("/v1/cars");
    expect(response.statusCode).toBe(200);
  });
});
