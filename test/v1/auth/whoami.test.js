const request = require("supertest");
const app = require("../../../app");

describe("GET /v1/auth/whoami", () => {
  let token;

  beforeAll((done) => {
    request(app)
      .post("/v1/auth/login")
      .send({
        email: "jayabaya@binar.co.id",
        password: "123456",
      })
      .expect(201)
      .end((err, res) => {
        if (err) throw err;
        token = res.body.accessToken;
        done();
      });
  });

  it("404 Status Code", async () => {
    return request(app)
      .post("/v1/auth/whoami")
      .set("Content-Type", "application/json")
      .then((res) => {
        expect(res.statusCode).toBe(404);
      });
  });
});
