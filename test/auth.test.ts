import request from "supertest";
import app from "../src/app";

describe("Auth Middleware", () => {
  it("should return 401 if no token", async () => {
    const res = await request(app).get("/api/v1/loans");
    expect(res.status).toBe(401);
  });
});