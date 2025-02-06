function payloadPostAuth() {
    return JSON.stringify({
        "grant_type": "password",
        "client_id": process.env.CLIENT_ID,
        "client_secret": process.env.CLIENT_SECRET,
        "username": process.env.USERNAME,
        "password": process.env.PASSWORD
    })
};

module.exports = { payloadPostAuth };