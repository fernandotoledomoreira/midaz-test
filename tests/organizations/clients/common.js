const crypto = require('crypto');

class Common {
    valuesChange(value) {
        const stringValue = String(value);

        if (stringValue.includes(".to_i")) {
            return parseInt(stringValue.split('.')[0], 10);
        } else if (stringValue.includes(".to_f")) {
            return parseFloat(stringValue.split('.')[0]);
        } else if (stringValue === "nulo") {
            return null;
        } else if (stringValue === "number_negative") {
            return -1;
        } else if (stringValue === "boolean_true") {
            return true;
        } else if (stringValue === "boolean_false") {
            return false;
        } else if (stringValue.includes(".characters_type_string")) {
            const length = parseInt(stringValue.split('.')[0], 10);
            return crypto.randomBytes(length).toString('hex').substring(0, length);
        } else if (stringValue.includes(".characters_type_numbers")) {
            const length = parseInt(stringValue.split('.')[0], 10);
            return Array.from({ length }, () => Math.floor(Math.random() * 9) + 1).join('');
        } else if (stringValue === "Array") {
            return [];
        } else if (stringValue === "Hash") {
            return {};
        } else {
            return value;
        }
    }
    
    changeFieldsPayload(payload, field, value) {
        const fieldParts = field.split(".");
        let current = JSON.parse(payload);
    
        for (let i = 0; i < fieldParts.length - 1; i++) {
            const part = fieldParts[i];
    
            if (Array.isArray(current[part])) {
                current = current[part][0];
            } else if (typeof current[part] === "object" && current[part] !== null) {
                current = current[part];
            } else {
                throw new Error(`Invalid path: ${part}`);
            }
        }
    
        const lastField = fieldParts[fieldParts.length - 1];
        current[lastField] = this.valuesChange(value);
    
        return JSON.stringify(current);
    }
}

export default new Common();