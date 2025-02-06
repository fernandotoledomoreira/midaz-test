const { DataFaker } = require("../../../helpers/dataFaker")

function payloadPostOrganization() {
    const datafaker = new DataFaker();
    return JSON.stringify({
        "legalName": datafaker.getCompanyName(),
        "doingBusinessAs": "The ledger.io",
        "legalDocument": "78425230000190",
        "status": {
            "code": "ACTIVE",
            "description": "Ledger Test"
        },
        "address": {
            "line1": "Avenida Paulista, 1234",
            "line2": "CJ 203",
            "zipCode": "01310916",
            "city": "East Taylor",
            "state": "VI",
            "country": "TG"
        },
        "metadata": {
            "chave": "metadata_chave",
            "bitcoin": "1GD8jg4kcHomS6QiAMXt9UajSqXn",
            "boolean": true,
            "double": 10.5,
            "int": 1
        }
    })
}

module.exports = { payloadPostOrganization }