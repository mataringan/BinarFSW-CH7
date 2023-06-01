const request = require("supertest");
const app = require("../../../app");

describe("POST /v1/cars", () => {
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

  it("401  status code", async () => {
    const name = "";
    const price = null;
    const size = "";
    const image = "";

    return request(app)
      .post("/v1/cars")
      .set("Content-Type", "application/json")
      .set("Authorization", `Bearer ${token}`)
      .send({ name, price, size, image })
      .then((res) => {
        expect(res.statusCode).toBe(401);
      });
  });
});
