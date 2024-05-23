const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("testeando ruta /cafes con statusCode 200", async () => {
    const { statusCode, body: cafes } = await request(server)
      .get("/cafes")
      .send();
    expect(statusCode).toBe(200);
    expect(cafes).toBeInstanceOf(Array);
    expect(cafes.length).toBeGreaterThanOrEqual(1);
  });
  it("Obteniendo statusCode 404 al eliminar elemento con id erróneo", async () => {
    const id = 5468465;
    const token = "token";
    const { statusCode, body: cafes } = await request(server)
      .delete(`/cafes/${id}`)
      .set("Authorization", token)
      .send();
    expect(statusCode).toBe(404);
  });
});
