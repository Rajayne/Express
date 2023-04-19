process.env.NODE_ENV = "test";
const request = require('supertest');

const app = require('./app');
let db = require("./error");

describe("GET /users", () => {
    test("Get all users", async () => {
        const res = await request(app).get("/users")
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({users: [
            {id: 1, username: "Rajayne"},
            {id: 2, username: "ATVDown"}
        ]})
    });
});