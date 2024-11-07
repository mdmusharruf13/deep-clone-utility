module.exports = function deepClone(params) {
    if (params === null || typeof params !== "object") {
        return null
    }

    return JSON.parse(JSON.stringify(params));
}

