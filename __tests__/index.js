const supertest = require('supertest')
const server = require('../api/server')

//1. This GET endpoint test is supposed to PASS//
test("GET /api/jokes, when logged in", async () => {
    const loginRes = await supertest(server)
    .post("/api/auth/login")
    .send({ username: "somnus", password: "nebula" })
    const res = await supertest(server)
    .get("/api/jokes")
    .set("Authorization", loginRes.body.token)
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    console.log(res.body)
})

//2. This GET endpoint test is supposed to FAIL//
test("GET /api/jokes, when logged in", async () => {
    const loginRes = await supertest(server)
    .post("/api/auth/login")
    .send({ username: "somnus", password: "wrongPassword" })
    const res = await supertest(server)
    .get("/api/jokes")
    .set("Authorization", loginRes.body.token)
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    console.log(res.body)
})

///////////////////////////////////////////////////////////////
