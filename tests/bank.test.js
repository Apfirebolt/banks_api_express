// write a test for /api/banks route

const request = require("supertest");
const app = require("../server");

describe("GET /api/banks", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/banks");
    expect(res.status).toBe(200);
  });
});
// write a test for /api/banks/:id route
describe("GET /api/banks/:id", () => {
  it("should return 200 OK", async () => {
    const res = await request(app).get("/api/banks/1");
    expect(res.status).toBe(200);
  });
});
