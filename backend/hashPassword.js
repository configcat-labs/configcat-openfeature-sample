import crypto from 'crypto';

const generatedString = crypto.randomBytes(16).toString('hex');

function hashPassword(password, salt) {
    const hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    const value = hash.digest('hex');

    return value;
}

function saltandHash(password) {
    const salt = generatedString
    const hashedPassword = hashPassword(password, salt);
    return hashedPassword;
}

export { saltandHash };