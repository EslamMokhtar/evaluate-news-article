import "babel-polyfill";
const request = require("supertest");
const app = require("../index");
require("dotenv").config();


describe("Test Server", () => {
  jest.setTimeout(30000);
  it("should return 201 status code", async () => {
    const res = await request(app).post("/url-input").send({
      url: "https://jamesclear.com/saying-no",
    });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("agreement");
  });
});
