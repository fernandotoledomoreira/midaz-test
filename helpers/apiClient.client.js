const { test, expect } = require('@playwright/test');

class ApiClient {
    /**
      * @param {import('playwright').APIRequest} request
    */

    constructor(request) {
        this.request = request;
    }

    headers(tokenBearer) {
        return JSON.stringify({
            "Content-Type": "application/json",
            "Authorization": tokenBearer
        });
    }

    async post(tokenBearer, uri, payload, statusCode = 201) {
        const apiUri = uri;
        let headers = this.headers(tokenBearer);
        console.log(`Starting Request POST: ${apiUri}`);
        console.log("Uri: " + apiUri);
        console.log(`Payload Sended: ${JSON.stringify(JSON.parse(payload), null, 2)}`);
        const apiRequest = await this.request.post(apiUri, {
            data: JSON.parse(payload),
            headers: JSON.parse(headers),
        });
        const apiResponse = await apiRequest.json();
        console.log(`Response ${[this.basePath]}: `);
        console.log(apiResponse);
        console.log(`StatusCode ${this.basePath}: ` + apiRequest.status());
        expect(apiRequest.status()).toEqual(statusCode);
        return { "apiResponse": apiResponse, "payloadSended": payload }
    }

    async patch(tokenBearer, uri, payload, statusCode = 200) {
        const apiUri = uri;
        let headers = this.headers(tokenBearer);
        console.log(`Starting Request PATCH: ${apiUri}`);
        console.log("Uri: " + apiUri);
        console.log(`Payload Sended: ${JSON.stringify(JSON.parse(payload), null, 2)}`);
        const apiRequest = await this.request.patch(apiUri, {
            data: JSON.parse(payload),
            headers: JSON.parse(headers),
        });
        const apiResponse = await apiRequest.json();
        console.log(`Response ${[this.basePath]}: `);
        console.log(apiResponse);
        console.log(`StatusCode ${this.basePath}: ` + apiRequest.status());
        expect(apiRequest.status()).toEqual(statusCode);
        return { "apiResponse": apiResponse, "payloadSended": payload }
    }

    async put(tokenBearer, uri, payload, statusCode = 200) {
        const apiUri = uri;
        let headers = this.headers(tokenBearer);
        console.log(`Starting Request PUT: ${apiUri}`);
        console.log("Uri: " + apiUri);
        console.log(`Payload Sended: ${JSON.stringify(JSON.parse(payload), null, 2)}`);
        const apiRequest = await this.request.put(apiUri, {
            data: JSON.parse(payload),
            headers: JSON.parse(headers),
        });
        const apiResponse = await apiRequest.json();
        console.log(`Response ${[this.basePath]}: `);
        console.log(apiResponse);
        console.log(`StatusCode ${this.basePath}: ` + apiRequest.status());
        expect(apiRequest.status()).toEqual(statusCode);
        return { "apiResponse": apiResponse, "payloadSended": payload }
    }

    async get(tokenBearer, uri, statusCode = 201) {
        const apiUri = uri;
        let headers = this.headers(tokenBearer);
        console.log(`Starting Request GET: ${apiUri}`);
        console.log("Uri: " + apiUri);
        const apiRequest = await this.request.get(apiUri, {
            headers: JSON.parse(headers),
        });
        const apiResponse = await apiRequest.json();
        console.log(`Response ${[this.basePath]}: `);
        console.log(apiResponse);
        console.log(`StatusCode ${this.basePath}: ` + apiRequest.status());
        expect(apiRequest.status()).toEqual(statusCode);
        return { "apiResponse": apiResponse };
    }

    async delete(tokenBearer, uri, statusCode = 201) {
        const apiUri = uri;
        let headers = this.headers(tokenBearer);
        console.log(`Starting Request DELETE: ${apiUri}`);
        console.log("Uri: " + apiUri);
        const apiRequest = await this.request.delete(apiUri, {
            headers: JSON.parse(headers),
        });
        const apiResponse = await apiRequest.json();
        console.log(`Response ${[this.basePath]}: `);
        console.log(apiResponse);
        console.log(`StatusCode ${this.basePath}: ` + apiRequest.status());
        expect(apiRequest.status()).toEqual(statusCode);
        return { "apiResponse": apiResponse };
    }
}

class ApiClientAuth {
    /**
      * @param {import('playwright').APIRequest} request
    */

    headers() {
        return JSON.stringify({
            "Content-Type": "application/json"
        });
    }

    constructor(request) {
        this.request = request;
    }

    async post(uri, payload, statusCode = 201) {
        const apiUri = uri;
        let headers = this.headers();
        console.log(`Token creation started: ${apiUri}`);
        const apiRequest = await this.request.post(apiUri, {
            data: JSON.parse(payload),
            headers: JSON.parse(headers),
        });
        const apiResponse = await apiRequest.json();
        console.log(`Token creation finished: ${apiUri}`);
        expect(apiRequest.status()).toEqual(statusCode);
        return { "apiResponse": apiResponse, "payloadSended": payload }
    }
}

module.exports = { ApiClient, ApiClientAuth }