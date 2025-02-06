const { faker } = require('@faker-js/faker');

class DataFaker {
    constructor() {
    }

    getFirstName(gender = null) {
        const genders = ['female', 'male'];
        gender == null ? gender = genders[Math.floor(Math.random() * genders.length)] : gender
        return faker.person.firstName(gender);
    }

    getLastName() {
        //remove replace later
        return faker.person.lastName().replace(/['"]+/g, '');
    }

    getFullName(gender = null) {
        const genders = ['female', 'male'];
        gender == null ? gender = genders[Math.floor(Math.random() * genders.length)] : gender
        return this.getFirstName(gender) + " " + this.getLastName().replace(/['"]+/g, '');
    }

    getCompanyName() {
        return faker.company.name().replace(/['"]+/g, '');
    }

}
module.exports = { DataFaker };