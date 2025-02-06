const { test, expect } = require('@playwright/test');
const { ApiClient, ApiClientAuth } = require('../../helpers/apiClient.client');

class AuthClient {
    /**
    * @param {import('playwright').APIRequest} request
    */

    constructor(request) {
        this.request = request;
        this.uri = process.env.AUTH_URI;
        this.basePath = '/api/login/oauth/access_token';
    }

    formatToken(tokenBearer){
        return `Bearer ${tokenBearer}`;
    }

    async postToken() {
        const uri = this.uri + this.basePath;
        const payload = require('../auth/payloads/postAuth').payloadPostAuth();
        return await new ApiClientAuth(this.request).post(uri, payload, 200);
    }

    async createToken() {
        const tokenBearer = await this.postToken();
        return this.formatToken(tokenBearer.apiResponse.access_token);
    }
}

module.exports = { AuthClient };