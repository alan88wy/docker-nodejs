module.exports = {
    MONGO_IP: process.env.MONGO_IP || "mongodb",
    MONGO_PORT: process.env.MONGO_PORT || 27017,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    PORT: process.env.PORT || 3000,
    MONGO_URL: `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`
}