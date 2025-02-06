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
    }

    async createOrganization(tokenBearer, statusCode = 201) {
        const payloadPostOrganization = require('../payloads/postOrganization').payloadPostOrganization();
        const apiUri = this.uri + this.basePath;
        return await new ApiClient(this.request).post(tokenBearer, apiUri, payloadPostOrganization, statusCode);
    }
}

module.exports = { OrganizationsClient };