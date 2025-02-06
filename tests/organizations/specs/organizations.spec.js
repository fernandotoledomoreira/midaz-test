const { test, expect } = require('@playwright/test');
const { OrganizationsClient } = require('../clients/organizations.client');
const { AuthClient } = require('../../auth/auth.client');

test.describe('Organizations Feature @allTests', () => {
    test('Create organization', async ({ request }) => {
        const tokenBearer = await new AuthClient(request).createToken();
        const reqPostOrganization = await new OrganizationsClient(request).createOrganization(tokenBearer);
    });
});