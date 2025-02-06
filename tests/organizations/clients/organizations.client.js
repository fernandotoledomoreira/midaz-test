const { test, expect } = require('@playwright/test');
const { ApiClient } = require('../../../helpers/apiClient.client');

class OrganizationsClient {
    /**
    * @param {import('playwright').APIRequest} request
    */

    constructor(request) {
        this.request = request;
        this.uri = process.env.LEDGER_URI;
        this.basePath = '/v1/organizations';
        this.completeUri = this.uri + this.basePath;
    }

    async createOrganization(tokenBearer, statusCode = 201) {
        const payloadPostOrganization = require('../payloads/postOrganization').payloadPostOrganization();
        return await new ApiClient(this.request).post(tokenBearer, this.completeUri, payloadPostOrganization, statusCode);
    }

    async listOrganizations(tokenBearer, statusCode = 200) {
        await new ApiClient(this.request).get(tokenBearer, this.completeUri, statusCode);
    }

    async listOrganizationById(tokenBearer, params, statusCode = 200) {
        const uri = `${this.completeUri}` + params;
        await new ApiClient(this.request).get(tokenBearer, uri, statusCode);
    }

    async deleteOrganizationById(tokenBearer, params, statusCode = 200) {
        const uri = `${this.completeUri}` + params;
        await new ApiClient(this.request).delete(tokenBearer, uri, statusCode);
    }
}

module.exports = { OrganizationsClient };