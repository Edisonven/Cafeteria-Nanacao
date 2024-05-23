const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("testeando ruta /cafes con statusCode 200", async () => {
    const { statusCode, body: cafes } = await request(server)
      .get("/cafes")
      .send();
    expect(statusCode).toBe(200);
    expect(cafes).toBeInstanceOf(Array);
  });
});
