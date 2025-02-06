const { test, expect } = require('@playwright/test');
const { OrganizationsClient } = require('../clients/organizations.client');
const { AuthClient } = require('../../auth/auth.client');

test.describe('Organizations Feature @allTests', () => {
    let tokenBearer;

    test.beforeEach(async ({ request }) => {
        tokenBearer = await new AuthClient(request).createToken();
    });

    test('POST organization', async ({ request }) => {
        await new OrganizationsClient(request).createOrganization(tokenBearer);
    });

    test('GET organization', async ({ request }) => {
        await new OrganizationsClient(request).createOrganization(tokenBearer);
        await new OrganizationsClient(request).listOrganizations(tokenBearer);
    });

    test('GET organization by ID', async ({ request }) => {
        const reqPostOrganization = await new OrganizationsClient(request).createOrganization(tokenBearer);
        const params = `/${reqPostOrganization.apiResponse.id}`;
        await new OrganizationsClient(request).listOrganizationById(tokenBearer, params);
    });

    test('DELETE organization by ID', async ({ request }) => {
        const reqPostOrganization = await new OrganizationsClient(request).createOrganization(tokenBearer);
        const params = `/${reqPostOrganization.apiResponse.id}`;
        await new OrganizationsClient(request).deleteOrganizationById(tokenBearer, params, 204);
    });
});