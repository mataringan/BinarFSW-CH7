const request = require("supertest");
const app = require("../../../../app");
const { Car } = require("../../../../app/models");

describe("DELETE /v1/cars/:id", () => {
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

  let car;
  beforeEach(async () => {
    car = await Car.create({
      name: "Avanza",
      price: 300000,
      size: "Small",
      image:
        "https://www.toyota.astra.co.id/sites/default/files/2021-11/5-avanza-white.png",
      isCurrentlyRented: false,
    });
    return car;
  });

  it("should response with 401 as status code", async () => {
    jest.setTimeout(240000);
    return request(app)
      .delete(`/v1/cars/${car.id}`)
      .set("Authorization", `Bearer ${token}`)
      .then((res) => {
        expect(res.statusCode).toBe(401);
      });
  });
});
