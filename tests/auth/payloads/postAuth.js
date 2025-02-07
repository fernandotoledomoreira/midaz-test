function payloadPostAuth() {
    return JSON.stringify({
        "grant_type": "password",
        "client_id": process.env.CLIENT_ID,
        "client_secret": process.env.CLIENT_SECRET,
        "username": process.env.USERNAME_MIDAZ,
        "password": process.env.PASSWORD_MIDAZ
    })
};

module.exports = { payloadPostAuth };