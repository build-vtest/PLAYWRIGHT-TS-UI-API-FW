import { expect, test } from "@playwright/test";
import json from "../testdata/api-data/api-testing/api-data.json"

test.describe.parallel('API testing', () => {

    test("TC-01 POST request - create user", async ({ request, baseURL }) => {
        const response = await request.post(`/api/users`, {
            data: json["TC-01"]
        });
        expect(response.status()).toBe(201);
        expect(response.ok()).toBeTruthy();
        console.log(await response.json());
        const responseBody = JSON.parse(await response.text());
        console.log(responseBody.name);
        expect(responseBody.name).toBe('morpheus');
    });
    test("TC-02 POST request - login successful", async ({ request, baseURL }) => {
        const response = await request.post(`${baseURL}/api/login`, {
            data: json["TC-02"]
        });
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        console.log(await response.json());
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.token).toBeTruthy();
    });
    test("TC-03 POST request - login unsuccessful", async ({ request, baseURL }) => {
        const response = await request.post(`${baseURL}/api/login`, {
            data: json["TC-03"]
        });
        expect(response.status()).toBe(400);
        expect(response.ok()).toBeFalsy();
        console.log(await response.json());
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.token).toBeFalsy();
        expect(responseBody.errorf).toBeFalsy();
    });

    test("TC-04 Siple API test - Assert response status", async ({ request, baseURL }) => {
        const response = await request.get(`${baseURL}/api/users/3`);
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });

    test("TC-05 Siple API test - Assert invalaid end point", async ({ request, baseURL }) => {
        const response = await request.get(`${baseURL}/invalid endpoint`);
        expect(response.status()).toBe(404);
    });

    test("TC-06 Verify GET request", async ({ request, baseURL }) => {
        const response = await request.get(`${baseURL}/api/users/1`);
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        console.log(await response.json());
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.data.id).toBe(1);
        expect(responseBody.data.first_name).toBe('George');
        expect(responseBody.data.last_name).toBe('Bluth');
        expect(responseBody.data.email).toBeTruthy();
    });
    test("TC-07 Verify PUT request", async ({ request, baseURL }) => {
        const response = await request.put(`${baseURL}/api/user/2`, {
            data: json["TC-04"]
        });
        expect(response.status()).toBe(200);
        expect(response.ok()).toBeTruthy();
        console.log(await response.json());
        const responseBody = JSON.parse(await response.text());
        expect(responseBody.name).toBe('Vikram');
        expect(responseBody.job).toBe('Senior Tester');
        expect(responseBody.updatedAt).toBeTruthy();
    });
    test("TC-08 Verify DELETE request", async ({ request, baseURL }) => {
        const response = await request.delete(`${baseURL}/api/user/2`);
        expect(response.status()).toBe(204);
        const res = await request.get(`${baseURL}/api/user/2`);
        console.log(await res.json());
    });
});
